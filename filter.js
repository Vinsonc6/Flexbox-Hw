const products = [
  { id: 1, name: "Lego Death Star", price: 1000.00, inStock: true, brand: "Star Wars",img:"https://www.lego.com/cdn/cs/set/assets/blt725a94446f56dbe2/75419_Prod.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1" },
  { id: 2, name: "Lego Millennium Falcon", price: 649.99, inStock: true, brand: "Star Wars",img:"https://www.lego.com/cdn/cs/set/assets/blte22f1f8d1cacfb3c/75192_alt1.jpg?fit=crop&quality=80&width=800&height=800&dpr=1"},
  { id: 3, name: "Lego R2D2", price: 230.00, inStock: true, brand: "Star Wars" ,img:"https://www.lego.com/cdn/cs/set/assets/blt8bdababaf97c063a/10225_alt1.jpg?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2"},
  { id: 4, name: "Lego Star Destroyer", price: 400.00, inStock: true, brand: "Star Wars",img:"https://www.lego.com/cdn/cs/set/assets/blt40f9e43bbfb9020b/75252_alt1.jpg?fit=crop&quality=80&width=800&height=800&dpr=1"},
  { id: 5, name: "Lego Super Star Destroyer", price: 1000.00, inStock: true, brand: "Star Wars",img: "https://m.media-amazon.com/images/I/81QPQA7jjZL.jpg" },
  { id: 6, name: "Lego Imperial Assault Carrier", price: 200.00, inStock: true, brand: "Star Wars",img:"https://www.lego.com/cdn/cs/set/assets/bltb83e876eac18037b/75106.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1" },
  { id: 7, name: "Republic Dropship with AT-OT", price: 1450.00, inStock: true, brand: "Star Wars" ,img: "https://www.lego.com/cdn/product-assets/product.img.pri/10195_prod.jpg" },
  { id: 8, name: "Jango Fett's Starship", price: 300.00, inStock: true, brand: "Star Wars" ,img: "https://www.lego.com/cdn/cs/set/assets/blt616e72cc7801d6d0/75409_Prod.png?fit=crop&quality=80&width=800&height=800&dpr=1" }, 
  { id: 9, name: "Lego AT-AT", price: 649.99, inStock: true, brand: "Star Wars" ,img: "https://m.media-amazon.com/images/I/81ASCxTdsVL._AC_UF894,1000_QL80_.jpg" }, 
  { id: 10, name: "Lego Brick (single)", price: 0.03, inStock: true, brand: "Others" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkno5amvH-eX8NumuzB3A6DdQgNHhaPW43g&s" },
  { id: 11, name: "City Police Station", price: 70.00, inStock: true, brand: "City" ,img:"https://m.media-amazon.com/images/I/81r959axlmL._AC_UF894,1000_QL80_.jpg" },
  { id: 12, name: "Fire Station Headquarters", price: 190.00, inStock: true, brand: "City" ,img:"https://cdn.merlinsbricks.com/images/LEGO-77944/LEGO-77944-0.webp?v=2" },
  { id: 13, name: "City Airport", price: 120.00, inStock: true, brand: "City" ,img: "https://m.media-amazon.com/images/I/81OQG7wwN4L._AC_UF894,1000_QL80_.jpg" },
  { id: 14, name: "City Hospital", price: 150.00, inStock: true, brand: "City" ,img: "https://www.lego.com/cdn/cs/set/assets/blt9fca6bebb661ec35/60330.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2" },
  { id: 15, name: "Yellow Construction Excavator", price: 54.99, inStock: true, brand: "City" ,img: "https://www.lego.com/cdn/cs/set/assets/blta6cb327eb3f74f0d/60420_boxprod_v39.png?fit=crop&quality=80&width=800&height=800&dpr=1" },
  { id: 16, name: "Space Science Lab", price: 34.99, inStock: true, brand: "City" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06pFGz76XKVV-05EhqAqVrvNC9bBllaALjw&s" },
  { id: 17, name: "Lego Bullet Train", price: 119.99, inStock: true, brand: "City" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcqssD3WQw9hOp2wwlMZbrZnntAbDTZrmtA&s" },
  { id: 18, name: "Botanical Garden", price: 350.00, inStock: true, brand: "Creator" , img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbPXcww1djtK_QvYgcaV-c_e7ZcVZ-1ZIKhDLQlHNVwYDtFACMdkIjqC3bE6u40zSJmoVcY1kviBPWNAA4Y2FQflFfqYal_FlrwankzWHTuTh6ZA8joJJlXA" },
  { id: 19, name: "The Goonies Ship", price: 330.00, inStock: true, brand: "Creator" , img: "https://www.lego.com/cdn/cs/set/assets/blt58ef7328bce3e306/21363_Prod_en-gb.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1" },
  { id: 20, name: "Arctic Explorer Science Lab Truck", price: 119.99, inStock: true, brand: "City", img: "https://www.lego.com/cdn/cs/set/assets/bltcf99ef5c7ef1e796/60471_Prod_en-gb.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1" }
];

list.filter((item) => item.brand === brand)
function filterByBrand(brand) {
    return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
    }

function addCards(list) {
    const container = document.getElementById('product-gallery');
    container.innerHTML = '';
    list.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card product-card';
        card.innerHTML = `
        <h2 class="card-header">${product.name}</h2>
        <img class="card-img" src="${product.img}"/>
        <div class="card-footer">
          <span class="card-price">$${product.price}</span>
          <a href="#buy-${index}" class="btn buy-btn">Buy</a>
        </div>`;
        container.appendChild(card);
    });
    
}


addCards(products);