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
    // other products...
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
    aboutSection.style.display = 'block';
}

// Show product order details when a product is clicked
function showProductOrderDetails(productId) {
    // Find the selected product by id
    let selectedProduct=null;
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

    // Show the product details order section
    const orderForm = document.getElementById('product-details-order');
    orderForm.style.display = 'block';

    // Hide the about section when product details order is displayed
    const aboutSection = document.getElementById('about');
    aboutSection.style.display = 'none';

    // Scroll to the order form smoothly
    orderForm.scrollIntoView({ behavior: 'smooth' });

    // Focus on the quantity input field in the order form
    document.getElementById('quantity').focus();
    // Optionally hide the product details section (if needed)
    hideProductDetails();
    document.getElementById('about').style.display = 'block';
}

// document.getElementById('aboutSection').style.display = 'block';


// Hide the product order details section and enable scrolling
function hideProductOrderDetails() {
    // document.getElementById('product-details-order').style.display = 'none';
    document.getElementById('about').style.display = 'block';

    // Re-enable scrolling when order form is hidden
    document.body.style.overflow = 'auto';
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
let orderItems = [];
let orderCount = 0;

function addItemToOrder() {
    const productName = document.getElementById('order-name').innerText;
    const productType = document.getElementById('order-description').innerText;  // assuming 'description' refers to product type
    const quantity = document.getElementById('quantity').value;
    const unitPrice = parseInt(document.getElementById('order-price').innerText.replace("₦", "").replace(",", ""));
    const amount = quantity * unitPrice;

    // Create the new item for the order table
    orderItems.push({
        serial: orderCount + 1,  // Increment serial number
        product: productName,
        productType: productType,
        quantity: quantity,
        price: unitPrice,
        amount: amount
    });

    // Increment the order count (to keep serial numbers unique)
    orderCount++;

    // Update the table display
    updateTable();

    // Show the order table (hidden initially)
    document.getElementById('orderTableSection').style.display = 'block';

    // Scroll to the order table smoothly
    const tableSection = document.getElementById('orderTableSection');
    tableSection.scrollIntoView({ behavior: 'smooth' });

    // Hide product type and return to product section
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('products').style.display = 'block';

    // Focus on the order table to show the updated content
    document.getElementById('orderTable').focus();

    // Hide and reset product order details form
    hideProductOrderDetails();
    resetOrderForm();
}

// Hide the product order details section and enable scrolling
function hideProductOrderDetails() {
    // Hide the product order details form
    document.getElementById('product-details-order').style.display = 'none';

    // Re-enable scrolling when order form is hidden
    document.body.style.overflow = 'auto';
}

// Reset the order form to default values (reset quantity and amount)
function resetOrderForm() {
    document.getElementById('quantity').value = 1; // Reset quantity to 1
    document.getElementById('total-price').innerText = `₦${document.getElementById('order-price').innerText.replace("₦", "")}`; // Set total amount equal to price
}

// Set the default amount in the order form to equal the price if quantity is 1
function calculateTotal() {
    const quantity = document.getElementById('quantity').value;

    // Get the product price (without the currency symbol and commas)
    const unitPrice = parseInt(document.getElementById('order-price').innerText.replace("₦", "").replace(",", ""));

    // Calculate the total price
    const totalPrice = quantity * unitPrice;

    // Update the total price in the display, formatted with commas
    document.getElementById('total-price').innerText = `₦${totalPrice.toLocaleString()}`;
}

// Back button to return to the product details page and reset form
function backToProductDetails() {
    // Hide product order details
    document.getElementById('product-details-order').style.display = 'none';

    // Show product details and reset quantity
    document.getElementById('product-details').style.display = 'block';
    document.getElementById('quantity').value = 1; // Reset quantity
    document.getElementById('total-price').innerText = `₦${document.getElementById('order-price').innerText.replace("₦", "")}`; // Set default amount
}

// Order item Table
function updateTable() {
    const tableBody = document.querySelector("#orderTable tbody");
    tableBody.innerHTML = ''; // Clear existing rows

    let totalAmount = 0; // Initialize total amount to 0

    // Rebuild the table with the current order items
    orderItems.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.serial}</td>
            <td>${item.product}</td>
            <td>${item.productType}</td>
            <td>${item.quantity}</td>
            <td>₦${item.price.toLocaleString()}</td>
            <td>₦${item.amount.toLocaleString()}</td>
            <td><button onclick="deleteItem(${index})">Delete</button></td>
        `;

        tableBody.appendChild(row);

        // Add the item's amount to the total
        totalAmount += item.amount;
    });

    // Update the Total Amount row in the table with the formatted total
    document.getElementById("totalAmount").innerText = `₦${totalAmount.toLocaleString()}`;
}

function deleteItem(index) {
    // Remove item from the orderItems array
    orderItems.splice(index, 1);

    // Renumber the remaining items
    for (let i = 0; i < orderItems.length; i++) {
        orderItems[i].serial = i + 1;  // assuming there's a 'serial' property
    }

    // Update the table
    updateTable();
}

// Proceed with the order (e.g., save order and print invoice)


// Cancel the order
function cancelOrder() {
    // Clear the order items
    orderItems = [];
    orderCount = 0;
    updateTable();

    // Hide the order table section
    document.getElementById('orderTableSection').style.display = 'none';
}

function handleDeliverySubmit(event) {
    // Prevent form submission
    event.preventDefault();

    // Get all input elements within the form
    const formElements = document.querySelectorAll('#delivery-details-form input, #delivery-details-form textarea');

    // Loop through each element and set them to readonly
    formElements.forEach((element) => {
        element.readOnly = true; // Makes the fields read-only
    });

    // Disable the submit button after submission
    const submitButton = document.querySelector('#delivery-details-form button[type="submit"]');
    submitButton.disabled = true; // Disables the submit button
    submitButton.style.display = 'none'; // Hides the submit button

}


function generateInvoice(data) {
    document.querySelector('.header div p:nth-child(1)').textContent = `Date: ${data.date}`;
    document.querySelector('.header div p:nth-child(3)').textContent = `#${data.invoiceNumber}`;
    document.querySelector('.section:nth-of-type(1)').textContent = `Billed To: ${data.customerName}`;
    
    let tableBody = document.querySelector('.table tbody');
    tableBody.innerHTML = '';
    data.items.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.description}</td>
            <td>${item.quantity}</td>
            <td>#${item.unitPrice.toLocaleString()}</td>
            <td>#${(item.quantity * item.unitPrice).toLocaleString()}</td>
        `;
        tableBody.appendChild(row);
    });
    
    document.querySelector('.total p:nth-child(1)').textContent = `Subtotal: #${data.subtotal.toLocaleString()}`;
    document.querySelector('.total p:nth-child(2)').textContent = `Waybill: #${data.waybill.toLocaleString()}`;
    document.querySelector('.total p:nth-child(3)').textContent = `Discount: -#${data.discount.toLocaleString()}`;
    document.querySelector('.total p:nth-child(4) strong').textContent = `Total: #${data.total.toLocaleString()}`;
}

// Example usage
const invoiceData = {
    date: "04/08/2024",
    invoiceNumber: "Nut-040824/0029",
    customerName: "Mr Patric",
    items: [
        { description: "Yagi Spices (In KG) - Packaged in white border transparent pouch", quantity: 1400, unitPrice: 11100 },
        { description: "Logistics - Transporting product from the factory to the point of way-billing", quantity: 1, unitPrice: 10000 }
    ],
    subtotal: 15560000,
    waybill: 0,
    discount: 60000,
    total: 15500000
};

generateInvoice(invoiceData);
