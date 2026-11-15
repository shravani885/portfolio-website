
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const status = document.getElementById("form-status");

    if (!name || !email || !subject || !message) {
        status.textContent = "Please fill in all fields.";
        return;
    }

    status.textContent = "Thank you! Your message has been received.";

    contactForm.reset();
});
