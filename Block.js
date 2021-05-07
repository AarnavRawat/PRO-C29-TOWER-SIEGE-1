class Block{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.6,
            'density':2.0,
            'friction':2.0,

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Block.png")
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(userWorld,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}