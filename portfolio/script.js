document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS animations
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 700,
            easing: "ease-out",
            once: true,
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navbar = document.querySelector(".navbar");

    if (navToggle && navbar) {
        navToggle.addEventListener("click", () => {
            const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", String(!isExpanded));
            navbar.classList.toggle("active");
        });

        // Close menu on link click (mobile)
        const navLinks = navbar.querySelectorAll(".nav-links a");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navToggle.setAttribute("aria-expanded", "false");
                navbar.classList.remove("active");
            });
        });
    }

    // Accessible focus outline for keyboard users
    function handleFirstTab(event) {
        if (event.key === "Tab") {
            document.body.classList.add("user-is-tabbing");
            window.removeEventListener("keydown", handleFirstTab);
            window.addEventListener("mousedown", handleMouseDownOnce);
        }
    }

    function handleMouseDownOnce() {
        document.body.classList.remove("user-is-tabbing");
        window.removeEventListener("mousedown", handleMouseDownOnce);
        window.addEventListener("keydown", handleFirstTab);
    }

    window.addEventListener("keydown", handleFirstTab);

    // Update footer year dynamically
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});