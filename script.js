let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let vxBolinha = 10;
let vyBolinha = 10;
let raio = diametro / 2;
let xRaquete = 10;
let yRaquete = 150;
let comprimentoRaquete = 10;
let larguraRaquete = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  desenhaRaquete();
  movimentaRaquete();
  verificaColisaoRaquete();
}

function desenhaBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += vxBolinha;
  yBolinha += vyBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > 600 || xBolinha - raio < 0) {
    vxBolinha *= -1;
  }
  if (yBolinha + raio > 400 || yBolinha - raio < 0) {
    vyBolinha *= -1;
  }
}

function desenhaRaquete() {
  rect(xRaquete, yRaquete, comprimentoRaquete, larguraRaquete);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + larguraRaquete && yBolinha + raio > yRaquete) {
    vxBolinha *= -1;
  }
}

 

