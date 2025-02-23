// JavaScript to add scrolling effect on the navbar
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    // Add 'scrolled' class when page is scrolled 50px or more
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else{
        navbar.classList.remove('scrolled');
     }
});