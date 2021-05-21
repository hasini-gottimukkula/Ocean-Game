class Creature {
    constructor(x, y, radius) {

        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("../Images/Jellyfish.png");

    }
    display() {
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, this.radius);
    }
}