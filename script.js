// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for viewing the resume
const modal = document.getElementById("resumeModal");
const btn = document.querySelector(".view-resume-btn");
const span = document.querySelector(".close");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Simple form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    const name = document.getElementById('charan').value;
    const email = document.getElementById('charandr313@gmail.com').value;
    const phone = document.getElementById('8660226050').value;

    if (name === 'charan' || email === 'charandr313@gmail.com' || phone === '8660226050') {
        alert('Please fill in all fields');
        e.preventDefault();
    }
});
