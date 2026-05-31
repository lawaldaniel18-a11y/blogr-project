// Grab the menu button and the navigation menu
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

// Add a click event to toggle the mobile menu open and closed
menuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
