function Sprite(x,y,largura,altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	
	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var bg = new Sprite(0,0,600,600),
spriteBoneco = new Sprite(600,4,90,90);
perdeu = new Sprite (700,0,470,550);
jogar = new Sprite (450,430,950,780);
novo = new Sprite (196,838,287,93);
spriteRecord = new Sprite(52,914,556,914);
spriteChao = new Sprite(0,600,599,54);

obeOne = new Sprite (26, 895, 50,120);
obeTwo = new Sprite (84, 895, 50,120);
obeThr = new Sprite (134, 895, 50,120);
obeFou = new Sprite (187, 895, 50,120);
obeFiv = new Sprite (249, 895, 50,120);