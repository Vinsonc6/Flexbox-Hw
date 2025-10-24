
// cleaned and corrected app.js

let category = "Star wars legos";

function addCart(item) {
    const buttons = document.querySelectorAll("button");
    // create array if we need to iterate
    const btnArray = Array.from(buttons);
    btnArray.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            console.log(event.target.textContent);
        });
    });
}

// made an array
// using forEach to put array of cards on screen
// work on cart

function inject(items) {
    const product = {
        name: "Lego Death Star",
        price: "$1000.00",
        inStock: true,
        category: "Star wars legos",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjZNOAfeQSAijCiOXAT0fKFrbSQ0NGQaHhQ&s"
    };
    // Example behavior: log and return the product
    console.log('Injected product:', product);
    return product;
}
    function inject(items) {
    const product = {
        name: "Lego Death Star",
        price: "$1000.00",
        inStock: true,
        category: "Star wars legos",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjZNOAfeQSAijCiOXAT0fKFrbSQ0NGQaHhQ&s"
    };
    }
const numbers = [1, 2, 3, 4, 5];
let x = 6;
if (numbers.includes(3)) {
    console.log("found");
} else {
    numbers.push(x);
    x++;
}

const names = ["Mcdonalds", "Wendy", "Applebees", "DaveHotChicken"];
if (names.includes("Wendy")) {
    console.log("found");
}
  
