let scene = 1;
let img1; 
let img2;
let img3; 
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;
let img21;
let img22;
let img23;
let imgAspectRatio;
let papyrusFont;

function preload() {
  img1 = loadImage('https://images.squarespace-cdn.com/content/v1/5dc8add506a5ea221df95744/1623274796943-QX4RJQ1Y3QFLFENJMYF4/Esperanza+Rising+Square+No+Text.png');
  img2 = loadImage('Images/Scene 1.png'); 
  img3 = loadImage('Images/scene 2.png');
  img4 = loadImage('Images/Scene 3.png');
  img5 = loadImage('Images/Scene 4.png');
  img6 = loadImage('Images/Scene 5.png');
  img7 = loadImage ('Images/Scene 6.png');
  img8 = loadImage('Images/Scene 8.png');
  img9 = loadImage('Images/Scene 7.png');
  img10 = loadImage('Images/Scene 9.png');
  img11 = loadImage('Images/Scene 10.png');
  img12 = loadImage('Images/scene 10 -.png');
  img13 = loadImage('Images/Scene 11.png');
  img14 = loadImage('Images/Scene 12.png');
  img15 = loadImage('Images/Scene 13.png');
  img16 = loadImage('Images/Scene 14.png');
  img17 = loadImage('Images/Scene 15.png');
  img18 = loadImage('Images/Scene 16.png');
  img19 = loadImage('Images/Scene 17.png');
  img20 = loadImage('Images/Scene 18.png');
  img21 = loadImage('Images/Scene 19.png');
  img22 = loadImage('Images/Scene 20.png');
  img23 = loadImage('Images/Scene 21.png');
  papyrusFont = loadFont('papyrus.ttf'); 
}

function setup() {
  createCanvas(600, 600);
  imgAspectRatio = img1.width / img1.height; 
}

function draw() {
  background(220);

  if (scene === 1) {
    displayScene1();
  } else if (scene === 2) {
    displayScene2();
  }
  else if (scene === 3) { 
    displayScene3();
  }
  else if (scene === 4){ 
    displayScene4();
}
  else if (scene === 5){
    displayScene5();
  }
  else if (scene === 6){
    displayScene6();
  }
  else if (scene === 7){
    displayScene7();
  }
  else if (scene === 8){
    displayScene8();
  }
else if (scene === 9){
    displayScene9();
  }
  else if (scene === 10){
    displayScene10();
  }
  else if (scene === 11){
    displayScene11();
  }
  else if (scene === 12){
    displayScene12();
  }
  else if (scene === 13){
    displayScene13();
  }
  else if (scene === 14){
    displayScene14();
  }
  else if (scene === 15){
    displayScene15();
  }
  else if (scene === 16){
    displayScene16();
  }
  else if (scene === 17){
    displayScene17();
  }
  else if (scene === 18){
    displayScene18();
  }
  else if (scene === 19){
    displayScene19();
  }
  else if (scene === 20){
    displayScene20();
  }
  else if (scene === 21){
    displayScene21();
  }
  else if (scene === 22){
    displayScene22();
  }
  else if (scene === 23){
    displayScene23();
  }
}

function displayScene1() {
  let scaledWidth, scaledHeight;

  if (width / height > imgAspectRatio) {
    scaledHeight = height;
    scaledWidth = imgAspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / imgAspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img1, x, y, scaledWidth, scaledHeight); 

  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(24);
  fill(0);
  text('Fields of Struggle, Flowers of Resilience', width/2, 40)
  text('Continue', 500 , height - 10);
}

function displayScene2() {
  background(100, 150, 200);
  
  let img2AspectRatio = img2.width / img2.height;
  let scaledWidth, scaledHeight;

  if (width / height > img2AspectRatio) {
    scaledHeight = height;
    scaledWidth = img2AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img2AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img2, x, y, scaledWidth, scaledHeight);

  textFont(papyrusFont);  
  textAlign(CENTER);
  
  let panelHeight = 70; // Height of the text panel
  fill(255, 255, 255, 150); // Semi-transparent white background for the panel
 
  rect(0, 500, width, 80); // Draw the panel
  
  textSize(32);
  fill(0);
  text('Chapter 1', width / 2, 530);
  textSize(20);
  text('AguasCalientes, Mexico 1924', width / 2, 570);
}

function displayScene3() {

  let img3AspectRatio = img3.width / img3.height;
  let scaledWidth, scaledHeight;

  if (width / height > img3AspectRatio) {
    scaledHeight = height;
    scaledWidth = img3AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img3AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img3, x, y, scaledWidth, scaledHeight);

}

function displayScene4() {

  let img4AspectRatio = img4.width / img4.height;
  let scaledWidth, scaledHeight;

  if (width / height > img4AspectRatio) {
    scaledHeight = height;
    scaledWidth = img4AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img4AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img4, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 2', width / 2, 530);
  textSize(20);
  text('Las Uvas: Six Years Later', width / 2, 570);
}

function displayScene5() {

  let img5AspectRatio = img5.width / img5.height;
  let scaledWidth, scaledHeight;

  if (width / height > img5AspectRatio) {
    scaledHeight = height;
    scaledWidth = img5AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img5AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img5, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 3', width / 2, 530);
  textSize(20);
  text('Las Papayas', width / 2, 570);
}

function displayScene6() {

  let img6AspectRatio = img6.width / img6.height;
  let scaledWidth, scaledHeight;

  if (width / height > img6AspectRatio) {
    scaledHeight = height;
    scaledWidth = img6AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img6AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img6, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 4', width / 2, 530);
  textSize(20);
  text('Las Higos', width / 2, 570);
}

function displayScene7() {

  let img7AspectRatio = img7.width / img7.height;
  let scaledWidth, scaledHeight;

  if (width / height > img7AspectRatio) {
    scaledHeight = height;
    scaledWidth = img7AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img7AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img7, x, y, scaledWidth, scaledHeight);

  
}

function displayScene8() {

  let img8AspectRatio = img8.width / img8.height;
  let scaledWidth, scaledHeight;

  if (width / height > img8AspectRatio) {
    scaledHeight = height;
    scaledWidth = img8AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img8AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img8, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 5', width / 2, 530);
  textSize(20);
  text('Las Guayabas', width / 2, 570);
}

function displayScene9() {

  let img9AspectRatio = img9.width / img9.height;
  let scaledWidth, scaledHeight;

  if (width / height > img9AspectRatio) {
    scaledHeight = height;
    scaledWidth = img9AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img9AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img9, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 6', width / 2, 530);
  textSize(20);
  text('Los Melones', width / 2, 570);
}

function displayScene10() {

  let img10AspectRatio = img10.width / img10.height;
  let scaledWidth, scaledHeight;

  if (width / height > img10AspectRatio) {
    scaledHeight = height;
    scaledWidth = img10AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img10AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img10, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 7', width / 2, 530);
  textSize(20);
  text('Las Cebollas', width / 2, 570);
}

function displayScene11() {

  let img11AspectRatio = img11.width / img11.height;
  let scaledWidth, scaledHeight;

  if (width / height > img11AspectRatio) {
    scaledHeight = height;
    scaledWidth = img11AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img11AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img11, x, y, scaledWidth, scaledHeight);

  
}

function displayScene12() {

  let img12AspectRatio = img12.width / img12.height;
  let scaledWidth, scaledHeight;

  if (width / height > img12AspectRatio) {
    scaledHeight = height;
    scaledWidth = img12AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img12AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img12, x, y, scaledWidth, scaledHeight);


}

function displayScene13() {

  let img13AspectRatio = img13.width / img13.height;
  let scaledWidth, scaledHeight;

  if (width / height > img13AspectRatio) {
    scaledHeight = height;
    scaledWidth = img13AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img13AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img13, x, y, scaledWidth, scaledHeight);

 
}

function displayScene14() {

  let img14AspectRatio = img14.width / img14.height;
  let scaledWidth, scaledHeight;

  if (width / height > img14AspectRatio) {
    scaledHeight = height;
    scaledWidth = img14AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img14AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img14, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 8', width / 2, 530);
  textSize(20);
  text('Las Almendras', width / 2, 570);
}

function displayScene15() {

  let img15AspectRatio = img15.width / img15.height;
  let scaledWidth, scaledHeight;

  if (width / height > img15AspectRatio) {
    scaledHeight = height;
    scaledWidth = img15AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img15AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img15, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 9', width / 2, 530);
  textSize(20);
  text('Las Ciruelas', width / 2, 570);
}

function displayScene16() {

  let img16AspectRatio = img16.width / img16.height;
  let scaledWidth, scaledHeight;

  if (width / height > img16AspectRatio) {
    scaledHeight = height;
    scaledWidth = img16AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img16AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img16, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 10', width / 2, 530);
  textSize(20);
  text('Las Papas', width / 2, 570);
}

function displayScene17() {

  let img17AspectRatio = img17.width / img17.height;
  let scaledWidth, scaledHeight;

  if (width / height > img17AspectRatio) {
    scaledHeight = height;
    scaledWidth = img17AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img17AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img17, x, y, scaledWidth, scaledHeight);

}

function displayScene18() {

  let img18AspectRatio = img18.width / img18.height;
  let scaledWidth, scaledHeight;

  if (width / height > img18AspectRatio) {
    scaledHeight = height;
    scaledWidth = img18AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img18AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img18, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 100, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 11', width / 2, 130);
  textSize(20);
  text('Las Aguacates', width / 2, 170);
}

function displayScene19() {

  let img19AspectRatio = img19.width / img19.height;
  let scaledWidth, scaledHeight;

  if (width / height > img19AspectRatio) {
    scaledHeight = height;
    scaledWidth = img19AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img19AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img19, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 12', width / 2, 530);
  textSize(20);
  text('Los Esparragos', width / 2, 570);
}

function displayScene20() {

  let img20AspectRatio = img20.width / img20.height;
  let scaledWidth, scaledHeight;

  if (width / height > img20AspectRatio) {
    scaledHeight = height;
    scaledWidth = img20AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img20AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img20, x, y, scaledWidth, scaledHeight);

}

function displayScene21() {

  let img21AspectRatio = img21.width / img21.height;
  let scaledWidth, scaledHeight;

  if (width / height > img21AspectRatio) {
    scaledHeight = height;
    scaledWidth = img21AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img21AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img21, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 13', width / 2, 530);
  textSize(20);
  text('Los Duraznos', width / 2, 570);
}

function displayScene22() {

  let img22AspectRatio = img22.width / img22.height;
  let scaledWidth, scaledHeight;

  if (width / height > img22AspectRatio) {
    scaledHeight = height;
    scaledWidth = img22AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img22AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img22, x, y, scaledWidth, scaledHeight);

  fill(255, 255, 255, 150);
  rect(0, 500, width, 80); 
  textFont(papyrusFont); 
  textAlign(CENTER);
  textSize(32);
  fill(0);
  text('Chapter 14', width / 2, 530);
  textSize(20);
  text('Las Uvas', width / 2, 570);
}

function displayScene23() {

  let img23AspectRatio = img23.width / img23.height;
  let scaledWidth, scaledHeight;

  if (width / height > img23AspectRatio) {
    scaledHeight = height;
    scaledWidth = img23AspectRatio * scaledHeight;
  } else {
    scaledWidth = width;
    scaledHeight = scaledWidth / img23AspectRatio;
  }

  let x = width / 2 - scaledWidth / 2;
  let y = height / 2 - scaledHeight / 2;
  image(img23, x, y, scaledWidth, scaledHeight);
}
 

function mousePressed() {
  scene++;
  if (scene > 23) {
    scene = 1; 
  }
}
