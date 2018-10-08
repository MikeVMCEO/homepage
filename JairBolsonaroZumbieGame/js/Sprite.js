// Funçao de desenhar sprites.
//Parte mais triste e que deu mais trabalho no game.
class Sprite {

    constructor(options) {
        for(let i in options) {
            this[i] = options[i];
        }

        this.currFrame = 0;

        if(this.animationSpeed > 0){
            this.interval = setInterval(() => {
                if(this.currFrame+1 >= this.frames) {
                    this.currFrame = 0;
                } else {
                    this.currFrame += 1;
                }
            }, 1000/this.animationSpeed);
        }
    }

    draw(x, y, context = this.context, rotation = 0, alpha = 1) {
        context.save();
        context.translate(stage.xMid, stage.yMid);
        context.globalAlpha = alpha;

        if (this.image.complete) {
            context.translate(x+this.scale/2,y+this.scale/2);
            context.rotate(rotation);
            context.drawImage(
                this.image,                     // img      SpeEspecificidades das imagens, canvas, ou elementos de videos a usar. 

                this.currFrame * (this.image.width / this.frames),    // sx       Optional. The x coordinate where to start clipping
                0,                              // sy       Opcional. A coordenada y onde começar o recorte

                (this.image.width / this.frames),                     // swidth   Optional. The width of the clipped image
                this.height,                    // sheight  Opcional. A altura da imagem recortada

                -this.scale,                    // x        A coordenada x onde colocar a imagem na tela
                -this.scale,                    // y        A coordenada y onde colocar a imagem na tela

                this.scale*2,                 // width    Opcional. A largura da imagem a ser usada (esticar ou reduzir a imagem)
                this.scale*2                  // height   Opcional. A altura da imagem a ser usada (esticar ou reduzir a imagem)
            );
        }

        context.restore();
    }

    drawRand(x,y) {
        let imageIndex = Math.floor(Math.random() * this.frames);
        this.currFrame = imageIndex;
        let randRotation = Math.random() * Math.PI * 2;

        this.draw(x,y,this.context,randRotation,0.7);
    }

    destroy() {
        clearInterval(this.interval);
        for(let i in this) {
            this[i] = null;
        }
    }
}

