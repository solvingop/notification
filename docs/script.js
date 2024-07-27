document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");
    const authDiv = document.getElementById("auth");

    // Simulated login/logout logic
    loginButton.addEventListener("click", () => {
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
        alert("Logged in successfully");
    });

    logoutButton.addEventListener("click", () => {
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
        alert("Logged out successfully");
    });

    // Search functionality
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        const notifications = document.querySelectorAll(".notification");
        
        notifications.forEach(notification => {
            const title = notification.querySelector("h3").textContent.toLowerCase();
            const description = notification.querySelector("p").textContent.toLowerCase();
            
            if (title.includes(filter) || description.includes(filter)) {
                notification.style.display = "";
            } else {
                notification.style.display = "none";
            }
        });
    });
});
