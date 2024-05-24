// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;
// velocidade da bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
// variaveis da eaquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComrpimento = 10;
let raqueteAltura = 90
function setup () {
     createCanvas (600, 400);  
  
}

function draw () {
background (0);
mostrabolinha( );
movimentabolinha( );
verificacolisaoborda( );
rect (5,150,10,90);
  
}
  
function mostrabolinha() { 
circle (xBolinha, yBolinha, diametro);
  
}

function movimentabolinha () {
xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
  
}
  
  function verificacolisaoborda() {
if (xBolinha > width || xBolinha- raio <0) {
   velocidadeXBolinha *= -1;
}
  
if (yBolinha > height || yBolinha- raio <0) {
   velocidadeXBolinha *= -1;
   }
}
