function setup(){
  createCanvas(window.innerWidth,window.innerHeight)
  angleMode(DEGREES)
  colorMode(HSB)
}
let factor=2

function draw(){
  let numPoints = mouseX

  background("black")
  // camelCase
  Strive.translate(window.innerWidth/2,window.innerHeight/2)
  Strive.drawTickAxes()
  noFill()
  stroke("white")
  circle(0,0,500)
  // circle(250*cos(theta),250*sin(theta),10)
  // theta+=45
//   for(let theta=0;theta<361;theta+=360/numPoints){
//     // translate angles to indecies
//        circle(250*cos(theta),250*sin(theta),10)

//   }
  let DVal=0
  let DPoint
  let angle = 360/numPoints
  for(let index = 0; index < numPoints; index++){
    let theta = angle*index
    let x = 250*cos(theta)
    let y = 250*sin(theta)
    circle(x,y,10)
    DVal=index*factor
    DPoint=DVal%numPoints
    let Yd = 250*sin(DPoint*angle)
    let Xd=250*cos(DPoint*angle)
    let hue=findDistance(x,y,Xd,Yd)

    //map(hue,0,500,0,360)
    if (hue>360){
      hue = map(hue,0,500,0,360)
    }
    //color assignment
    stroke(hue,50,50)
    line(x,y,Xd,Yd)
  }
  factor+=0.05
  // line(250*cos(0*angle),250*sin(0*angle),250*cos(1*angle),250*sin(1*angle))
  // x = rcos(theta)
  // y = rsin(theta)
}
// for(let x = 0; x < n; x++)
// line(x1,y1,x2,y2)
function findDistance(x1,y1,x2,y2){
  return Math.sqrt((y2-y1)**2+(x2-x1)**2)
}
