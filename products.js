let products = [
    { name: "Laptop", category: "electronics", price: 600 },
    { name: "Shirt", category: "clothing", price: 30 },
    { name: "Headphones", category: "electronics", price: 80 },
    { name: "Jeans", category: "clothing", price: 50 }
];

function displayProducts(items) {
    let container = document.getElementById("productList");
    container.innerHTML = "";
    items.forEach(p => {
        let div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p>`;
        container.appendChild(div);
    });
}
function filterProducts() {
    let category = document.getElementById("filterCategory").value;
    let filtered = category === "all" ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
}
function sortProducts() {
    let order = document.getElementById("sortPrice").value;
    let sorted = [...products];
    if (order === "low") sorted.sort((a, b) => a.price - b.price);
    if (order === "high") sorted.sort((a, b) => b.price - a.price);
    displayProducts(sorted);
}
displayProducts(products);
