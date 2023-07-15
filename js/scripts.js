class Pizza {
    constructor(toppings, size) {
        this.toppings = toppings;
        this.size = size;
    }
    getCost() {
        let cost = 0;
        if (this.size == "small") {
            cost += 5;
        }
        else if (this.size == "medium") {
            cost += 8;
        }
        else {
            cost += 10;
        }
        cost += .25 * this.toppings.length;
        return cost;
    }

}
