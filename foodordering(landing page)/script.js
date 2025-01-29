// Sample menu items
const menuItems = [
    { id: 1, name: "Pizza Margherita", description: "Classic cheese pizza with fresh tomatoes.", price: 12.99, image: "download.jpeg" },
    { id: 2, name: "Spaghetti Carbonara", description: "Traditional Italian pasta with creamy sauce.", price: 15.99, image: "images.webp" },
    { id: 3, name: "Caesar Salad", description: "Crisp greens with Caesar dressing.", price: 8.99, image: "salad.webp" },
    { id: 4, name: "Burger & Fries", description: "Juicy burger with crispy fries.", price: 10.99, image: "burger.jpeg" },
];

// Cart data
let cart = [];

// Display menu items
function displayMenu() {
    const menuContainer = document.querySelector(".menu-items");
    menuItems.forEach(item => {
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu-item");

        menuDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price">$${item.price.toFixed(2)}</div>
            <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuContainer.appendChild(menuDiv);
    });
}

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    cart.push(item);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartLink = document.getElementById("cartLink");
    cartLink.textContent = `Cart (${cart.length})`;

    const cartMessage = document.getElementById("cartMessage");
    if (cart.length > 0) {
        cartMessage.innerHTML = `<strong>${cart.length}</strong> items in your cart.`;
    } else {
        cartMessage.textContent = "No items in your cart.";
    }
}

// Initialize the page
window.onload = function() {
    displayMenu();
};

