// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Typing effect
const text = ["Web Developer", "Frontend Designer", "Student"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 120);
    }
})();
//certificate
function viewCertificate(image) {
    document.getElementById("certificatePopup").style.display = "flex";
    document.getElementById("popupImage").src = image;
}

function closePopup() {
    document.getElementById("certificatePopup").style.display = "none";
}

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});