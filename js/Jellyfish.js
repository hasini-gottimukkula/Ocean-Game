class Jellyfish extends Creature {
    constructor(x, y, radius) {
        super(x, y, 40);
        this.image = loadImage("../Images/Jellyfish.png");
    }

    display() {
        super.display();
    }
}