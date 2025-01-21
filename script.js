 // Get the toggle button and navigation links container
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Add event listener to toggle navigation visibility
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

  // Function to hide all forms and show the selected one
function toggleForms(formToShow) {
    // Get all form containers
    const forms = document.querySelectorAll('.form-container');

    // Hide all forms
    forms.forEach(form => {
        form.style.display = 'none';
    });

    // Show the selected form
    document.getElementById(formToShow).style.display = 'block';

    // Update heading based on the form shown
    const formHeading = document.getElementById('formHeading');
    if (formToShow === 'loginForm') {
        formHeading.textContent = 'Login to Your Account';
    } else if (formToShow === 'signupForm') {
        formHeading.textContent = 'Sign Up for an Account';
    } else if (formToShow === 'resetForm') {
        formHeading.textContent = 'Reset Your Password';
    }
}

// Event listeners for toggling between forms
document.getElementById('forgot-password-link').addEventListener('click', function () {
    toggleForms('resetForm');
});

document.getElementById('signup-link').addEventListener('click', function () {
    toggleForms('signupForm');
});

document.getElementById('login-link').addEventListener('click', function () {
    toggleForms('loginForm');
});

// Default form shown on page load (Login form)
window.onload = function () {
    toggleForms('loginForm');
};


    let slideIndex = 0;

    function showSlides() {
        let slides = document.querySelectorAll('.slide');
        let slider = document.querySelector('.slider');

        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        setTimeout(showSlides, 3000);  // Change slide every 3 seconds
    }

    // Initialize the slide show
    window.onload = function () {
        showSlides();
    };

    // Data for all products
const productData = {
    kulikuli: {
        title: "Kulikuli Products",
        description: "Discover our range of Kulikuli products, crafted to perfection.",
        products: [
            {
                img: "../../Images/kuli-paint.jpeg",
                label: "Best for Commercial",
                name: "Paint Robber (1.7kg)",
                price: "₦6,200",
            },
            {
                img: "../../Images/1kg.jpeg",
                label: "For commercial",
                name: "1kg Kulikuli (1,000gram)",
                price: "₦3,600",
            },
            {
                img: "../../Images/kuli-modu.webp",
                label: "For commercial",
                name: "Mudu Kulikuli (850gram)",
                price: "₦3,200",
            },
            {
                img: "../../Images/700gram.jpeg",
                label: "Light and crunchy 700g Kulikuli",
                name: "700g Kulikuli",
                price: "₦2,000",
            },
            {
                img: "../../Images/250gram.png",
                label: "Perfect for small gatherings or personal use",
                name: "250g Kulikuli",
                price: "₦1,000",
            },
            {
                img: "../../Images/125gram.png",
                label: "Convenient 125g pack, perfect for on-the-go",
                name: "125g Kulikuli",
                price: "₦450",
            },
        ],
    },
    dankowa: {
        title: "Dankowa Products",
        description: "Explore the rich and flavorful Dankowa snacks, made with groundnuts and maize flour.",
        products: [
            {
                img: "../../Images/dankowa-pack1.jpeg",
                label: "Family Pack",
                name: "Dankowa Family Pack (2kg)",
                price: "₦4,800",
            },
            {
                img: "../../Images/dankowa-pack2.jpeg",
                label: "Regular Pack",
                name: "Dankowa Regular Pack (1kg)",
                price: "₦2,500",
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
            },
            {
                img: "../../Images/yaji-pack2.jpeg",
                label: "Premium Pack",
                name: "Yaji Premium Pack (1kg)",
                price: "₦2,300",
            },
        ],
    },
    groundnutOil: {
        title: "Groundnut Oil",
        description: "Discover our pure and healthy groundnut oil, extracted from the finest groundnuts.",
        products: [
            {
                img: "../../Images/oil-bottle1.jpeg",
                label: "Small Bottle",
                name: "Groundnut Oil (1L)",
                price: "₦1,800",
            },
            {
                img: "../../Images/oil-bottle2.jpeg",
                label: "Large Bottle",
                name: "Groundnut Oil (5L)",
                price: "₦8,000",
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
        <div class="product-card">
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