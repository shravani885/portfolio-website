
document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.querySelector(".home-section");

    if (homeSection) {
        homeSection.classList.add("home-loaded");
    }

    console.log("Home module loaded successfully!");
});
