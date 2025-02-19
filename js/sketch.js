let img; 
let video;
let lines = []; 


function preload() {
  img = loadImage('imgs/raiznsf22.png'); 
}

function setup() {
    let cnv=createCanvas(600, 800);
  cnv.parent(document.querySelector('.container')); // Ubica el canvas en el contenedor
  cnv.style("pointer-events", "none"); // Permite hacer clic en el video




  let fastSpeed = 3;
  let mediumSpeed = 2;
  let slowSpeed = 1.5;

  
    // líneas con diferentes puntos de inicio y final
  lines.push(new GrowingLine(563, 800, 600, 756, fastSpeed)); 
  lines.push(new GrowingLine(532, 800, 600, 722, mediumSpeed)); 
  lines.push(new GrowingLine(510, 800, 600, 700, slowSpeed)); 
  lines.push(new GrowingLine(486, 800, 600, 670, fastSpeed)); 
  lines.push(new GrowingLine(474, 800, 600, 656, mediumSpeed)); 
  lines.push(new GrowingLine(474, 800, 600, 616, slowSpeed)); 
  lines.push(new GrowingLine(474, 800, 600, 606, fastSpeed)); 
  lines.push(new GrowingLine(468, 800, 600, 563, mediumSpeed)); 
  lines.push(new GrowingLine(458, 800, 600, 553, slowSpeed)); 
  lines.push(new GrowingLine(450, 800, 600, 519, fastSpeed)); 
  lines.push(new GrowingLine(440, 800, 600, 436, mediumSpeed)); 
  lines.push(new GrowingLine(430, 800, 600, 380, slowSpeed)); 
  lines.push(new GrowingLine(428, 800, 600, 352, fastSpeed)); 
  lines.push(new GrowingLine(448, 800, 600, 252, mediumSpeed)); 
  lines.push(new GrowingLine(420, 800, 600, 282, slowSpeed)); 
  lines.push(new GrowingLine(414, 800, 600, 180, fastSpeed)); 
  lines.push(new GrowingLine(400, 800, 600, 290, mediumSpeed)); 
  lines.push(new GrowingLine(380, 800, 600, 90, slowSpeed)); 
  lines.push(new GrowingLine(385, 800, 600, 50, fastSpeed)); 
  lines.push(new GrowingLine(360, 800, 600, 20, mediumSpeed));   
  // Líneas (hacia arriba)
  lines.push(new GrowingLine(364, 800, 556, 0, fastSpeed)); 
  lines.push(new GrowingLine(350, 800, 534, 0, mediumSpeed));
  lines.push(new GrowingLine(350, 800, 500, 0, slowSpeed));
  lines.push(new GrowingLine(350, 800, 490, 0, fastSpeed));
  lines.push(new GrowingLine(345, 800, 470, 0, mediumSpeed));
  lines.push(new GrowingLine(335, 800, 424, 0, slowSpeed));
  lines.push(new GrowingLine(330, 800, 420, 0, fastSpeed));
  lines.push(new GrowingLine(340, 800, 400, 0, mediumSpeed)); 
  lines.push(new GrowingLine(348, 800, 424, 0, slowSpeed));  
  lines.push(new GrowingLine(330, 800, 400, 0, fastSpeed));
  lines.push(new GrowingLine(325, 800, 390, 0, mediumSpeed));
  lines.push(new GrowingLine(320, 800, 360, 0, slowSpeed));
  lines.push(new GrowingLine(316, 800, 330, 0, fastSpeed));
  lines.push(new GrowingLine(314, 800, 300, 0, mediumSpeed));
  lines.push(new GrowingLine(309, 800, 272, 0, slowSpeed)); 
  lines.push(new GrowingLine(300, 800, 220, 0, fastSpeed)); 
  lines.push(new GrowingLine(306, 800, 255, 0, mediumSpeed)); 
  lines.push(new GrowingLine(296, 800, 230, 0, slowSpeed)); 
  lines.push(new GrowingLine(280, 800, 200, 0, fastSpeed));
  lines.push(new GrowingLine(260, 800, 120, 0, mediumSpeed));
  lines.push(new GrowingLine(255, 800, 100, 0, slowSpeed));
  lines.push(new GrowingLine(240, 800, 170, 0, fastSpeed)); 
  lines.push(new GrowingLine(232, 800,  80, 0, mediumSpeed)); 
  lines.push(new GrowingLine(210, 800,  40, 0, slowSpeed));
  lines.push(new GrowingLine(190, 800,  20, 0, fastSpeed)); 
  lines.push(new GrowingLine(170, 800,  10, 0, mediumSpeed)); 

// Línea  (hacia izquierda)
  lines.push(new GrowingLine(200, 800, 0, 300, fastSpeed));
  lines.push(new GrowingLine(220, 800, 0, 330,  mediumSpeed));
  lines.push(new GrowingLine(220, 800, 0, 360, slowSpeed));
  lines.push(new GrowingLine(240, 800, 0, 390, fastSpeed));
  lines.push(new GrowingLine(175, 800, 0,  10,  mediumSpeed));
  lines.push(new GrowingLine(160, 800, 0, 230, slowSpeed));
  lines.push(new GrowingLine(160, 800, 0, 130, fastSpeed));
  lines.push(new GrowingLine(165, 800, 0, 100,  mediumSpeed));
  lines.push(new GrowingLine(150, 800, 0, 430, slowSpeed));
  lines.push(new GrowingLine(145, 800, 0, 530, fastSpeed));  
  lines.push(new GrowingLine(140, 800, 0, 580,  mediumSpeed));
  lines.push(new GrowingLine(130, 800, 0, 590, slowSpeed));
  lines.push(new GrowingLine(120, 800, 0, 530, fastSpeed));
  lines.push(new GrowingLine(110, 800, 0, 400,  mediumSpeed));
  lines.push(new GrowingLine(90, 800, 0, 560, slowSpeed));
  lines.push(new GrowingLine(80, 800, 0, 660, fastSpeed));
  lines.push(new GrowingLine(60, 800, 0, 740,  mediumSpeed));
  lines.push(new GrowingLine(50, 800, 0, 610, slowSpeed));
  lines.push(new GrowingLine(40, 800, 0, 620, fastSpeed));
}

function draw() {
    clear(); // Lienzo transparente
    image(img, 0, 0, width, height); // Mueve la imagen al inicio para que no tape las líneas
 
    stroke(233, 185, 238);
    strokeWeight(2);
    noFill();
   

  // Dibujar cada línea
  for (let line of lines) {
    line.update();  // Actualiza el progreso de cada línea
    line.display(); // Muestra la línea
  }
 
  image(img, 0, 0, width, height);

}

// Clase para las líneas que crecen
class GrowingLine {
  constructor(xStart, yStart, xEnd, yEnd, growthSpeed) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
    this.growthSpeed = growthSpeed;
    this.points = []; // Puntos de la línea
  }

  update() {
    // Solo agregar puntos hasta que llegue al destino
    if (this.yStart > this.yEnd) {
      let progress = map(this.yStart, 800, this.yEnd, 0, 1); // Progreso hacia abajo o hacia arriba
      let xCurrent = lerp(this.xStart, this.xEnd, progress); // Interpolación en X
      let xOffset = map(noise(frameCount * 0.05), 0, 1, -10, 10); // Movimiento orgánico
      
      this.points.push({ x: xCurrent + xOffset, y: this.yStart });
      this.yStart -= this.growthSpeed; // Hace que la línea suba (o baje) hacia el punto final
    }
  }

  display() {
    // Dibujar la línea curva
    beginShape();
    for (let p of this.points) {
      curveVertex(p.x, p.y);
    }
    endShape();
  }
}






