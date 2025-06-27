// ===== Login/Register Toggle =====
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

// ===== Login Form Handling =====
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        if (!email || !password) {
            alert("Please fill in both fields.");
            return;
        }

        alert("Login successful!");
    });
}

// ===== Register Form Handling =====
const registerForm = document.getElementById("register-form");
if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;
        const confirmPassword = document.getElementById("register-confirm-password").value;

        if (!email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration successful!");
    });
}

// ===== Contact Form Handling =====
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contact-name").value;
        const email = document.getElementById("contact-email").value;
        const message = document.getElementById("contact-message").value;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you for reaching out! We'll get back to you soon.");
    });
}

// ===== Load Destinations =====
function loadDestinations() {
    const destinations = [
        { name: "Paris", imageUrl: "https://via.placeholder.com/400x300?text=Paris" },
        { name: "New York", imageUrl: "https://via.placeholder.com/400x300?text=New+York" },
        { name: "Tokyo", imageUrl: "https://via.placeholder.com/400x300?text=Tokyo" },
        { name: "London", imageUrl: "https://via.placeholder.com/400x300?text=London" }
    ];

    const destinationsList = document.getElementById("destinations-list");

    if (destinationsList) {
        destinations.forEach(destination => {
            const card = document.createElement("div");
            card.classList.add("destination-card");

            const image = document.createElement("img");
            image.src = destination.imageUrl;
            card.appendChild(image);

            const title = document.createElement("h3");
            title.textContent = destination.name;
            card.appendChild(title);

            destinationsList.appendChild(card);
        });
    }
}

// ===== Load Packages =====
function loadPackages() {
    const packages = [
        { name: "Luxury Paris Getaway", description: "Experience the beauty of Paris with a 5-star luxury package.", price: "$5000" },
        { name: "Budget Tokyo Adventure", description: "Explore Tokyo on a budget with this affordable 7-day package.", price: "$1200" },
        { name: "Romantic London Retreat", description: "A romantic getaway for two in London, with top accommodations.", price: "$3000" },
        { name: "New York City Tour", description: "See the best of New York with this 4-day sightseeing tour.", price: "$2000" }
    ];

    const packagesList = document.getElementById("packages-list");

    if (packagesList) {
        packages.forEach(pkg => {
            const card = document.createElement("div");
            card.classList.add("package-card");

            const title = document.createElement("h3");
            title.textContent = pkg.name;
            card.appendChild(title);

            const description = document.createElement("p");
            description.textContent = pkg.description;
            card.appendChild(description);

            const price = document.createElement("div");
            price.classList.add("price");
            price.textContent = pkg.price;
            card.appendChild(price);

            const bookBtn = document.createElement("button");
            bookBtn.textContent = "Book Now";
            bookBtn.onclick = () => openBookingModal(pkg.name);
            card.appendChild(bookBtn);

            packagesList.appendChild(card);
        });
    }
}

// ===== Booking Modal Logic =====
const bookingModal = document.getElementById('booking-modal');
const closeBooking = document.getElementById('close-booking');
const bookingForm = document.getElementById('booking-form');
const confirmationMessage = document.getElementById('booking-confirmation');
const confirmationPackage = document.getElementById('confirmation-package');

// Open booking modal with pre-filled package
function openBookingModal(packageName) {
    document.getElementById('package-name').value = packageName;
    bookingForm.style.display = 'block';
    confirmationMessage.style.display = 'none';
    bookingModal.style.display = 'block';
}

// Close modal on X
if (closeBooking) {
    closeBooking.addEventListener('click', () => {
        bookingModal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
});

// ===== Final Booking Form Logic =====
if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form values
        const userName = document.getElementById('name').value;
        const userEmail = document.getElementById('email').value;
        const userPhone = document.getElementById('phone').value;
        const bookingDate = document.getElementById('date').value;
        const ticketCount = document.getElementById('tickets').value;
        const totalCost = document.getElementById('totalCost').value;

        console.log('Booking Details:', {
            userName,
            userEmail,
            userPhone,
            bookingDate,
            ticketCount,
            totalCost
        });

        alert('Booking Confirmed! Your total cost: ' + totalCost);

        bookingForm.style.display = 'none';
        confirmationPackage.textContent = document.getElementById('package-name').value;
        confirmationMessage.style.display = 'block';
    });
}

// ===== Initial Load =====
window.onload = function () {
    loadDestinations();
    loadPackages();
};
