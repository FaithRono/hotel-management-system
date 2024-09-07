document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the selected role
    const role = document.getElementById('role').value;

    // Check credentials (this is just a simple example; real-world use would require more robust authentication)
    // Assuming authentication is successful, redirect based on role
    if (role === 'admin') {
        window.location.href = 'admin.html';
    } else if (role === 'manager') {
        window.location.href = 'manager.html';
    } else if (role === 'frontdesk') {
        window.location.href = 'frontdesk.html';
    } else if (role === 'staff') {
        window.location.href = 'staff.html';
    } else {
        alert('Invalid role selected');
    }
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-btn");

    if (logoutButton) {
        logoutButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default anchor action
            window.location.href = "index.html"; // Redirect to landing page
        });
    }
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-btn");
    const profileButton = document.getElementById("profile-btn");
    const profileSection = document.getElementById("profile-section");
    const overviewSection = document.getElementById("overview");

    // Handle Logout
    if (logoutButton) {
        logoutButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default anchor action
            window.location.href = "index.html"; // Redirect to landing page
        });
    }

    // Handle Profile Toggle
    if (profileButton) {
        profileButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor action
            if (profileSection.style.display === "none") {
                profileSection.style.display = "block"; // Show profile section
                if (overviewSection) overviewSection.style.display = "none"; // Hide overview section
            } else {
                profileSection.style.display = "none"; // Hide profile section
                if (overviewSection) overviewSection.style.display = "block"; // Show overview section
            }
        });
    }
});

// Function to Update Profile
function updateProfile() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // You can send this data to the server for updating via an API call
    alert("Profile updated successfully!");
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simple authentication logic (replace with actual implementation)
    if (username && password) {
        // Hide the login section and show the dashboard
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard-overview').style.display = 'block';
        document.getElementById('quick-links').style.display = 'block';
        document.getElementById('notifications').style.display = 'block';

        // Show role-specific content
        handleRoleRedirect(role);
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

function handleRoleRedirect(role) {
    // Redirect based on the user's role
    if (role === 'cook') {
        window.location.href = 'cook.html';
    } else if (role === 'waiter') {
        window.location.href = 'waiter.html';
    } else if (role === 'bar-attendant') {
        window.location.href = 'bar-attendant.html';
    } else if (role === 'other') {
        window.location.href = 'other-staff.html';
    }
}
