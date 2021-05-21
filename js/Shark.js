class Shark extends Creature {
    constructor(x, y, radius) {
        super(x, y, 50);
        this.image = loadImage("../Images/Shark.png");
    }

    display() {
        super.display();
    }
}