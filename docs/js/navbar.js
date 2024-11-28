// Highlight the active link in the navbar
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header.navbar .nav-links a");

    navLinks.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});