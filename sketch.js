const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
const Constraint=Matter.Constraint

var bob,roof,ground;

function setup(){
engine=Engine.create();
world=engine.world;

createCanvas(800,700);

ground=new Roof(400,700,800,30);
roof=new Roof(400,200,600,30);

bobDiameter=70

bobObject1=new Bob(250,600,70);
bobObject2=new Bob(320,600,70)
bobObject3=new Bob(390,600,70)
bobObject4=new Bob(460,600,70)
bobObject5=new Bob(530,600,70)




rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2.1,0)
rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1.1,0)
rope3=new Rope(bobObject3.body,roof.body,-bobDiameter*0.10,0)
rope4=new Rope(bobObject4.body,roof.body,-bobDiameter*-0.8,0)
rope5=new Rope(bobObject5.body,roof.body,-bobDiameter*-1.8,0)



Engine.run(engine)
}

function draw(){
background("pink");
Engine.update(engine);

ground.display();
roof.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



}


function keyPressed(){
if(keyCode===32){
//Matter.Body.setStatic(bobObject1.body,false)
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50})

}	

}



/*Notes
1.THE DISTANCE BETWEEN THE BOBS IN THIS CASE WOULD BE = TO THEIR DIAMETER
2.CENTER XOFFSET OF THE CENTER BOB WAS 0.15 AND FOR OTHERS ON THE LEFT HAND SIDE = DIFFERENCE OF 1

LIKE B1OFFSET-B2OFFSET=1
SIMILARLY ON THE RIGHT SIDE

3.LEFT=NEGATIVE{FOR THE XOFFSET}
RIGHT=POSITIVE

LIKE B1{ON THE LEFT SIDE}= -VALUE

B4,B5={XOFFSET=POSITIVE(OR -*-)}

***POINTB DETERMINES THE DISTANCE BETWEEN THE POINT ON THE ROOP AND THE DIAMETER OF THE BOB
SO,YOFFSET=POSITIVE
AND,SHOULD BE SET AS,"OffsetY-value needed"


*/
