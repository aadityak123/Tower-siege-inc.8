class Base{
    constructor(x,y){
        var options = {
            isStatic: true
        }


        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 200;
        this.height = 20;
        World.add(world, this.body);
    }

        display(){

            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,this.width,this.height)

        }

}
