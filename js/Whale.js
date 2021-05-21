class Whale extends Creature {
    constructor(x, y, radius) {
        super(x, y, 70);
        this.image = loadImage("../Images/Whale.png");
    }

    display() {
        super.display();
    }
}