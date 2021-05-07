class Polygon {
    constructor(x, y, radius) {
        var options = {
            'restitution': 0.8,
            'density': 1.0,
            'friction': 1.0,
        }

        this.body = Bodies.circle(x, y, radius * 2, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("polygon.png");
        this.radius = radius;
        World.add(userWorld, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
    }
}