class Block{
  constructor(x,y){

    var options={
      restitution:0.3,
      friction:0.5,
      density:1.2,
    }

    this.body = Bodies.rectangle( x, y, 30, 40, options);
    this.width = 30;
    this.height = 40;
    World.add(world,this.body);

  }

  display(){
    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop()
    
  }
}
