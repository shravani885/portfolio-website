
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.toggle("selected");
    });
});

console.log("Skills module loaded successfully!");

