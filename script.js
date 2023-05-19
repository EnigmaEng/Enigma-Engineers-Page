let iconoMenu = document.querySelector('#icono_menu');
let navbar = document.querySelector('.navbar');

iconoMenu.classList.remove('bx-x');
    navbar.classList.remove('active');

let navbar2 = document.getElementsById('navbar') ;

iconoMenu.onclick = () => {
    iconoMenu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar2.style.display = "flex";
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top>= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);
};

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.contenido-home, .heading', { origin: top});
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: bottom});
ScrollReveal().reveal('.contenido-home h1, .about-content', { origin: left});

