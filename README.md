# _Izzy's Pizza Parlor_

#### By _**Elena Rosa**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_


## Description

This is a build your pizza order page. Guests can choose their toppings from a drop down menu, and select their preferred size. Then they are presented with the total cost of the pizza. Enjoy! 

## Setup/Installation requirements

* Clone repo from Github to your desktop with this command. $ git clone https://Elena-Rosa.github.io/IzzyPizza/

* Open index.html in a browser. 


## Known Bugs

* _No issues known_

## Tests

Describe: Pizza 

Test 1: "It should return getCost method"
Code:Pizza
Expected output:Define the class for pizza. Toppings and the getCost method with "small", "medium", or "large" offered.


Test 2: "It should return a Pizza object with three properties/ toppings and size"
Code: new Pizza(["cheese", "onions"], "medium");
Expected Output: Pizza {toppings: (2)["cheese", "onions"], size: "medium" 


Test 3: "It should return a Pizza object with four properties/ toppings and size. "
Code: new Pizza(["cheese", "onions", "peppers"], "small");
Expected output: Pizza {toppings: (3)["cheese", "onions", "peppers"], size: "small" 

Describe getCost

Test 1: It should return the cost of the Pizza
Code: let pizza = new Pizza(["cheese", "onions", "peppers"], "small");
pizza.getCost();
Expected output: 5.75

Test 2: It should return the cost of the Pizza
Code: let pizza = new Pizza(["pepperoni", "sausage", "olives"], "medium");
pizza.getCost();
Expected output: 8.75

Test: It should return the cost of the Pizza
Code: let pizza = new Pizza(["peppers", "onions"], "large");
pizza.getCost();
Expected output: 10.50

## License


* _Copyright (c) _July 14th 2023_ _Elena Rosa)_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
