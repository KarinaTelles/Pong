let diametro = 15;
let raio = diametro/2;

let xBolinha = 300;
let yBolinha = 200;

let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

let widthRaquete = 10; 
let heightRaquete = 90;
let radiusOfTheCornerRaquete = 2;

let xRaqueteJogador = 30;
let yRaqueteJogador = 150;

let xRaqueteBot = 560;
let yRaqueteBot = 150;
let velocidadeYRaqueteBot;

let meusPontos = 0;
let pontosDoOponente = 0;

  function setup(){createCanvas(600, 400);}

  function draw(){
    background(5);
    
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoDaBolinhaComAParade();
    
    mostraRaquete(xRaqueteJogador,yRaqueteJogador,
                  widthRaquete,heightRaquete,
                  radiusOfTheCornerRaquete);
    
    mostraRaquete(xRaqueteBot,yRaqueteBot,
                widthRaquete,heightRaquete,
                radiusOfTheCornerRaquete);
    
    moveRaqueteJogador();
    verificaColisãoComARaquete();
    movimentaRaqueteOponente();
    verificaColisaoRaqueteBotComABordaNoEixoY();
    verificaColisaoRaqueteJogadorComABordaNoEixoY();
    incluiPlacar();
    marcaPonto();
  }

  function mostraRaquete(x,y, width, height, radiusCorner){
    rect(x, y, width, height, radiusCorner);
  }

  function mostraBolinha(){circle(xBolinha,yBolinha,diametro);
  }

  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }

  function verificaColisaoDaBolinhaComAParade(){
    if(xBolinha + raio > width || xBolinha - raio < 0){
      mudaDirecaoBolinhaEixoX()
    }
    
    if(yBolinha + raio > height || yBolinha - raio < 0){
      mudaDirecaoBolinhaEixoY()
    }
  }

  function mudaDirecaoBolinhaEixoX(){velocidadeXBolinha *= -1;}
  function mudaDirecaoBolinhaEixoY(){velocidadeYBolinha *= -1;}

  function moveRaqueteJogador(){
    if(keyIsDown(UP_ARROW)){yRaqueteJogador -= 10;}
    if(keyIsDown(DOWN_ARROW)){yRaqueteJogador += 10;}
  }

//if(xBolinha - raio < xRaqueteJogador + widthRaquete &&
      //yBolinha - raio < yRaqueteJogador + heightRaquete
       //&& yBolinha + raio > yRaqueteJogador)

  //Testando para entender melhor 
  function verificaColisãoComARaquete(){
    //Colisão com a raquete jogador
    if(xBolinha - raio < xRaqueteJogador + widthRaquete){
      velocidadeXBolinha *= -1;
    }
    //Colisão com a raquete bot
    if(xBolinha + raio > xRaqueteBot){
      velocidadeXBolinha *= -1;
    }
  }

  function movimentaRaqueteOponente(){
      velocidadeYRaqueteBot = yBolinha - yRaqueteBot - widthRaquete / 2 - 30;
      yRaqueteBot += velocidadeYRaqueteBot;
    }
  
  function verificaColisaoRaqueteBotComABordaNoEixoY(){
    if(yRaqueteBot < 0){
       yRaqueteBot = 0;
     }
    if(yRaqueteBot + 90 > height){
      yRaqueteBot = 310;
    }  
  }
  
  function verificaColisaoRaqueteJogadorComABordaNoEixoY(){
    if(yRaqueteJogador < 0){
       yRaqueteJogador = 0;
     }
    if(yRaqueteJogador + 90 > height){
      yRaqueteJogador = 310;
    }
  }
  function incluiPlacar(){
    fill(255);
    text(meusPontos,278,26);
    text(pontosDoOponente,321,26);
  }
  function marcaPonto(){
    if(xBolinha > 590){
      meusPontos += 1;
    }
    if(xBolinha < 60){
      pontosDoOponente += 1;
    }
  }