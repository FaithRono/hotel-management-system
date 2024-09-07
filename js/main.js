// Function to handle navigation between pages
function navigateTo(page) {
    window.location.href = page;
}

// Placeholder for adding event listeners and handling form submissions
document.addEventListener('DOMContentLoaded', () => {
    // Example of form submission handling
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            navigateTo('dashboard.html');
        });
    }

    // Example of adding a new room dynamically
    const addRoomForm = document.querySelector('#add-room-form');
    if (addRoomForm) {
        addRoomForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('New room added!');
            // Handle adding the room logic here
        });
    }

    // Add similar event listeners and logic for other forms
});
// JavaScript for handling room details modal
document.querySelectorAll(".book-btn").forEach(button => {
    button.addEventListener("click", function () {
        const roomDetails = `
            <p><strong>Room Name:</strong> Deluxe Room</p>
            <p><strong>Beds:</strong> 2 Queen Size Beds</p>
            <p><strong>Bathrooms:</strong> 1 Bathroom with Shower</p>
            <p><strong>Toilets:</strong> 1 Toilet</p>
            <p><strong>Balcony:</strong> Private Balcony with Sea View</p>
            <!-- Add more details as needed -->
        `;
        document.getElementById("roomDetails").innerHTML = roomDetails;
        document.getElementById("roomDetailsModal").style.display = "block";
    });
});

// JavaScript to close the modal
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("roomDetailsModal").style.display = "none";
});

// JavaScript to handle payment option selection
const paymentOptions = document.querySelectorAll('input[name="paymentMethod"]');
paymentOptions.forEach(option => {
    option.addEventListener('change', function() {
        // Hide all payment details
        document.getElementById("creditCardDetails").style.display = 'none';
        
        // Show selected payment details
        if (this.value === "Credit Card") {
            document.getElementById("creditCardDetails").style.display = 'block';
        }
        // You can add more conditions here for other payment options if needed
    });
});
