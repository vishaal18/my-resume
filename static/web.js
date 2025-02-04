// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Accordion Functionality
const accordions = document.querySelectorAll(".accordion h3");
accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const panel = accordion.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

// Skill Progress Animation
window.addEventListener("load", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute("style").split("width: ")[1];
    });
});
