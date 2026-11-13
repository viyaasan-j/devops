
// 1. Welcome Message

function showMessage() {

    alert("Welcome to Nova! Thank you for visiting our website.");

}


// 2. Smooth Scrolling Navigation

document.querySelectorAll('nav a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// 3. Display Current Date and Time

function showDateTime() {

    const now = new Date();

    const currentDate = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const currentTime = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    document.getElementById('date').textContent =
        "Date: " + currentDate;

    document.getElementById('time').textContent =
        currentTime;

}


// Call function immediately

showDateTime();


// Update time every second

setInterval(showDateTime, 1000);


// 4. Interactive Service Cards

const serviceCards = document.querySelectorAll('.card');

serviceCards.forEach(function(card) {

    card.addEventListener('click', function() {

        const serviceName =
            this.querySelector('h3').textContent;

        alert("You selected: " + serviceName);

    });

});


// 5. Contact Message

function contactUs() {

    alert(
        "Thank you for your interest! We will connect with you soon."
    );

}


// 6. Back to Top Function

function backToTop() {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });

}


// 7. Automatically Update Footer Year

const currentYear = new Date().getFullYear();

document.getElementById('footerText').textContent =
    "© " + currentYear + " Nova. All Rights Reserved.";


// 8. Browser Console Messages

console.log("Nova Website Loaded Successfully!");

console.log("Welcome to Nova Digital World!");

console.log("JavaScript is connected successfully!");
