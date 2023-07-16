//Business Logic
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

window.addEventListener("load", function () {
    const order = document.getElementById("order")
    order.addEventListener("click", function () {
        placeOrder()
    })

    //user interface logic

})
function placeOrder() {
    event.preventDefault();

    let toppings = [];

    if (document.getElementById("cheese").checked) {
        toppings.push("cheese");
    }
    if (decument.getElementById("pepperoni").checked) {
        toppings.push("pepperoni");
    }
    if (decument.getElementById("sausage").checked) {
        toppings.push("sausage");
    }
    if (document.getElementById("olives").checked) {
        toppings.push("olives");
    }
    if (document.getElementById("onions").checked) {
        toppings.push("onions");
    }
    if (document.getElementById("peppers").checked) {
        toppings.push("peppers");
    }

    let size = docoment.getElementById("size").value


    let pizza = new Pizza(toppings, size);
    let cost = pizza.getCost();
    document.getElementById("results").innerHTML = "Your total is: $" + cost.toFixed(2);

}
