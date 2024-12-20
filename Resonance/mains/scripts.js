// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for header height
                    behavior: "smooth" // Smooth scrolling effect
                });
            }
        });
    });

    // Sticky header functionality
    const header = document.querySelector(".main-header");
    const heroSection = document.querySelector(".hero");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        },
        {
            root: null, // Observe changes relative to the viewport
            threshold: 0, // Trigger when hero section leaves viewport
        }
    );

    if (heroSection) {
        observer.observe(heroSection);
    }

    // Contact form submission (mock functionality)
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault(); // Prevent actual form submission

            // Gather form data
            const formData = new FormData(contactForm);
            const name = formData.get("name");
            const email = for

