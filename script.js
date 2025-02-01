// Get the toggle button and navigation links container
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Add event listener to toggle navigation visibility
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById('login-link').addEventListener('click', function () {
    toggleForms('loginForm');
});
document.getElementById('signup-link').addEventListener('click', function () {
    toggleForms('signupForm');
});
document.getElementById('forgot-password-link').addEventListener('click', function () {
    toggleForms('resetForm');
});
document.getElementById('contact-link').addEventListener('click', function () {
    toggleForms('contactForm');
});

function toggleForms(formId) {
    const forms = ['loginForm', 'signupForm', 'resetForm', 'contactForm'];
    forms.forEach(function (form) {
        document.getElementById(form).style.display = form === formId ? 'block' : 'none';
    });
}

// Default form shown on page load (Login form)
window.onload = function () {
    toggleForms('loginForm');
    showSlides();
};

// Slide Show Functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let slider = document.querySelector('.slider');

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Data for all products
const productData = {
    kulikuli: {
        title: "Kulikuli Products",
        description: "Discover our range of Kulikuli products, crafted to perfection.",
        products: [
            {
                img: "../../Images/125gram.png",
                label: "Convenient 125g pack, perfect for on-the-go",
                name: "125g Kulikuli",
                price: "₦450",
                id: "125g-kulikuli",
            },
            {
                img: "../../Images/250gram.png",
                label: "Perfect for small gatherings or personal use",
                name: "250g Kulikuli",
                price: "₦1,000",
                id: "250g-kulikuli",
            },
            {
                img: "../../Images/kuli-modu.webp",
                label: "For Commercial",
                name: "Mudu Kulikuli (850gram)",
                price: "₦3,200",
                id: "mudu-kulikuli",
            },
            {
                img: "../../Images/1kg.jpeg",
                label: "For Commercial",
                name: "1kg Kulikuli (1,000gram)",
                price: "₦3,600",
                id: "1kg-kulikuli",
            },
            {
                img: "../../Images/kuli-paint.jpeg",
                label: "Best for Commercial",
                name: "Paint Robber (1.7kg)",
                price: "₦6,200",
                id: "paint-robber",
            },
        ],
    },
    groundnutOil: {
        title: "Groundnut Oil",
        description: "Discover our pure and healthy groundnut oil, extracted from the finest groundnuts.",
        products: [
            {
                img: "../../Images/oil-75cl.jpg",
                label: "Small Bottle",
                name: "Groundnut Oil (75CL)",
                price: "₦3,000",
                id: "groundnut-oil-74cl",
            },
            {
                img: "../../Images/oil-5 amd 2l.jpg",
                label: "2L Bottle",
                name: "Groundnut Oil (2L)",
                price: "₦9,000",
                id: "groundnut-oil-2l",
            },
            {
                img: "../../Images/oil-5 amd 2l.jpg",
                label: "5L Bottle",
                name: "Groundnut Oil (5L)",
                price: "₦22,500",
                id: "groundnut-oil-5l",
            },
            {
                img: "../../Images/oil-10l.PNG",
                label: "10 Bottle",
                name: "Groundnut Oil (10L)",
                price: "₦45,000",
                id: "groundnut-oil-10l",
            },
            {
                img: "../../Images/oil-25l.jpg",
                label: "25 Bottle",
                name: "Groundnut Oil (25L)",
                price: "₦110,000",
                id: "groundnut-oil-25l",
            },
        ],
    },
    dankowa: {
        title: "Dankowa Products",
        description: "Explore the rich and flavorful Dankowa snacks, made with groundnuts and maize flour.",
        products: [
            {
                img: "../../Images/dankowa-pack2.jpeg",
                label: "Regular Pack",
                name: "Dankowa Regular Pack (1kg)",
                price: "₦2,500",
                id: "dankowa-regular-pack",
            },
            {
                img: "../../Images/dankowa-pack1.jpeg",
                label: "Family Pack",
                name: "Dankowa Family Pack (2kg)",
                price: "₦4,800",
                id: "dankowa-family-pack",
            },
        ],
    },
    yaji: {
        title: "Yaji Seasoning",
        description: "Experience the bold flavors of our Yaji seasoning, crafted with aromatic spices.",
        products: [
            {
                img: "../../Images/yaji-pack1.jpeg",
                label: "Classic Pack",
                name: "Yaji Classic Pack (500g)",
                price: "₦1,200",
                id: "yaji-classic-pack",
            },
            {
                img: "../../Images/yaji-pack2.jpeg",
                label: "Premium Pack",
                name: "Yaji Premium Pack (1kg)",
                price: "₦2,300",
                id: "yaji-premium-pack",
            },
        ],
    },
};

// Show product details
function showProductDetails(productKey) {
    const detailsSection = document.getElementById("product-details");
    const productTitle = document.getElementById("product-title");
    const detailsGrid = document.querySelector(".product-details-grid");

    // Populate details section
    const product = productData[productKey];
    productTitle.textContent = product.title;
    detailsGrid.innerHTML = product.products
        .map(
            (item) => `
        <div class="product-card" onclick="showProductOrderDetails('${item.id}')">
            <img src="${item.img}" alt="${item.name}">
            <div class="product-label">${item.label}</div>
            <div class="product-details">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
            </div>
        </div>
    `
        )
        .join("");

    // Show details section and hide product grid
    document.getElementById("products").style.display = "none";
    detailsSection.style.display = "block";
}

// Hide product details
function hideProductDetails() {
    document.getElementById("product-details").style.display = "none";
    document.getElementById("products").style.display = "block";
}

// Show product order details when a product is clicked
function showProductOrderDetails(productId) {
    // Find the selected product by id
    let selectedProduct;
    for (const category in productData) {
        selectedProduct = productData[category].products.find((product) => product.id === productId);
        if (selectedProduct) break;
    }

    // Update the product details in the order section
    document.getElementById('order-title').innerText = selectedProduct.name;
    document.getElementById('order-name').innerText = selectedProduct.name;
    document.getElementById('order-description').innerText = selectedProduct.label;
    document.getElementById('order-price').innerText = selectedProduct.price;
    document.getElementById('order-image').src = selectedProduct.img;

    // Show the order section
    const orderForm = document.getElementById('product-details-order');
    orderForm.style.display = 'block';

    // Scroll to the order form smoothly
    orderForm.scrollIntoView({ behavior: 'smooth' });

    // Focus on the quantity input field in the order form
    document.getElementById('quantity').focus();
}

// Hide the product order details section
function hideProductOrderDetails() {
    document.getElementById('product-details-order').style.display = 'none';
}

// Calculate total price based on quantity
function calculateTotal() {
    const quantity = document.getElementById('quantity').value;

    // Get the product price (without the currency symbol and commas)
    const unitPrice = parseInt(document.getElementById('order-price').innerText.replace("₦", "").replace(",", ""));

    // Calculate the total price
    const totalPrice = quantity * unitPrice;

    // Update the total price in the display, formatted with commas
    document.getElementById('total-price').innerText = `₦${totalPrice.toLocaleString()}`;
}

// Add item to order (for demonstration, logging it to console)
function addItemToOrder() {
    const productName = document.getElementById('order-name').innerText;
    const quantity = document.getElementById('quantity').value;
    const totalAmount = document.getElementById('total-price').innerText;

    console.log(`Added ${productName} (Quantity: ${quantity}, Total: ${totalAmount}) to the order.`);
}
