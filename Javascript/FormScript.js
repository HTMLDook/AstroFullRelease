const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
form.addEventListener("submit", (e) => {
    if (!validateEmail(emailInput.value)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}