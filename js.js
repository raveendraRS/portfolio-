document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".menu-toggle input");
    const navMenu = document.querySelector(".menu");

    navToggle.addEventListener("change", function() {
        if (this.checked) {
            navMenu.classList.add("show");
        } else {
            navMenu.classList.remove("show");
        }
    });

    const navLinks = document.querySelectorAll(".menu a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const targetId = navLink.getAttribute("href"); // Get the target section id
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });

                // Update the URL to match the section
                history.pushState(null, null, targetId);
            }
        });
    });

    // Use Intersection Observer to update URL when scrolling to different sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = "#" + entry.target.getAttribute("id");
                history.replaceState(null, null, id);
            }
        });
    }, { threshold: 0.5 }); // Trigger when section is 50% visible

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        observer.observe(section);
    });

    // Check if the page is reloaded and redirect to the home page if needed
    const hash = window.location.hash;
    if (!hash || hash === "#") {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});
