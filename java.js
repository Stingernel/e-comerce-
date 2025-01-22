const header = document.querySelector("header");

// Menambahkan efek sticky pada header saat scroll
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu saat ikon hamburger diklik
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// Menutup menu saat halaman di-scroll
window.onscroll = () => {
    if (window.scrollY > 0) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    }
};

// Konfigurasi ScrollReveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Reveal efek pada elemen tertentu
sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 300, origin: 'top' });
sr.reveal('.feature, .product, .cta-content, .contact', { delay: 200, origin: 'top' });
