let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let vxBolinha = 7;
let vyBolinha = 7;
let raio = diametro / 2;
let xRaqueteEsquerda = 10;
let yRaqueteEsquerda = 150;
let xRaqueteDireita = 580;
let yRaqueteDireita = 150;
let comprimentoRaquete = 10;
let larguraRaquete = 100;
let pontosEsquerda = 0;
let pontosDireita = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  desenhaRaqueteEsquerda();
  desenhaRaqueteDireita();
  movimentaRaqueteEsquerda();
  movimentaRaqueteDireita();
  verificaColisaoRaqueteEsquerda();
  verificaColisaoRaqueteDireita();
  desenhaPontuacao();
}

function desenhaBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += vxBolinha;
  yBolinha += vyBolinha;
}

function verificaColisaoBorda() {

  if (xBolinha + raio > 600) {
    pontosEsquerda += 1;  
    xBolinha = 300; 
    yBolinha = 200;
  }

  if (xBolinha - raio < 0) {
    pontosDireita += 1; 
    xBolinha = 300;  
    yBolinha = 200;
  }

  if (yBolinha + raio > 400 || yBolinha - raio < 0) {
    vyBolinha *= -1;
  }
}

function desenhaRaqueteEsquerda() {
  rect(xRaqueteEsquerda, yRaqueteEsquerda, comprimentoRaquete, larguraRaquete);
}

function desenhaRaqueteDireita() {
  rect(xRaqueteDireita, yRaqueteDireita, comprimentoRaquete, larguraRaquete);
}

function movimentaRaqueteEsquerda() {
  if (keyIsDown(UP_ARROW) && yRaqueteEsquerda > 0) {
    yRaqueteEsquerda -= 10;
  }
  if (keyIsDown(DOWN_ARROW) && yRaqueteEsquerda < height - larguraRaquete) {
    yRaqueteEsquerda += 10;
  }
}

function movimentaRaqueteDireita() {
  if (keyIsDown(87) && yRaqueteDireita > 0) {  
    yRaqueteDireita -= 10;
  }
  if (keyIsDown(83) && yRaqueteDireita < height - larguraRaquete) {  
    yRaqueteDireita += 10;
  }
}

function verificaColisaoRaqueteEsquerda() {
  if (xBolinha - raio < xRaqueteEsquerda + comprimentoRaquete && yBolinha - raio < yRaqueteEsquerda + larguraRaquete && yBolinha + raio > yRaqueteEsquerda) {
    vxBolinha *= -1;
  }
}

function verificaColisaoRaqueteDireita() {
  if (xBolinha + raio > xRaqueteDireita && yBolinha - raio < yRaqueteDireita + larguraRaquete && yBolinha + raio > yRaqueteDireita) {
    vxBolinha *= -1;
  }
}

function desenhaPontuacao() {
  textSize(32);
  fill(255);
  textAlign(CENTER, TOP);
  text(pontosEsquerda, width / 4, 20);  
  text(pontosDireita, width * 3 / 4, 20);  
}
