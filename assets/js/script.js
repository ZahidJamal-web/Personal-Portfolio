// ==========================================
// MAIN.JS
// Place inside:
// assets/js/main.js
// ==========================================

console.log("MAIN JS LOADED");

window.addEventListener('scroll',()=>{
    document.querySelector('header')
    .classList.toggle('scrolled',window.scrollY>50);
});

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

const about = document.querySelector("#about");

function showAbout(){

    const triggerPoint = window.innerHeight - 150;

    const aboutTop = about.getBoundingClientRect().top;

    if(aboutTop < triggerPoint){

        about.classList.add("active");

    }

}

window.addEventListener("scroll", showAbout);

showAbout();

/* ==========================================
   NAVBAR TOGGLE
========================================== */

const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');

    if(navbar.classList.contains('active')){
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});

const rightItems =
document.querySelectorAll('.reveal-right');

function revealRight(){

    rightItems.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 150){

            item.classList.add('active');

        }

    });

}

window.addEventListener(
'scroll',
revealRight
);

revealRight();

/* ==========================================
   TYPED JS
========================================== */

var typed = new Typed(".typing-text", {

    strings: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "MERN Stack Development",
        "Python Development"
    ],

    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,

});


/* ==========================================
   PARTICLES JS
========================================== */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#8b5cf6"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5,
            random: false
        },

        size: {
            value: 4,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {

            repulse: {
                distance: 150
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});


/* ==========================================
   SCROLL REVEAL
========================================== */

const srtop = ScrollReveal({

    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false

});


/* HOME */

srtop.reveal('.home .content h3', {
    delay: 200
});

srtop.reveal('.home .content p', {
    delay: 300
});

srtop.reveal('.home .content .btn', {
    delay: 400
});

srtop.reveal('.home .image', {
    delay: 500
});


/* ABOUT */

srtop.reveal('.about .content', {
    delay: 200
});


/* SKILLS */

srtop.reveal('.skills-wrapper', {
    delay: 200
});

srtop.reveal('.skill-cat', {
    interval: 150
});


/* EXPERIENCE */

srtop.reveal('.experience-card', {
    interval: 200
});


/* PROJECTS */

srtop.reveal('.work .box', {
    interval: 200
});


/* EDUCATION */

srtop.reveal('.education .box', {
    interval: 200
});


/* CONTACT */

srtop.reveal('.contact .container', {
    delay: 200
});


/* ==========================================
   DISABLE INSPECT
========================================== */

document.onkeydown = function (e) {

    // F12
    if (e.keyCode == 123) {
        return false;
    }

    // Ctrl+Shift+I
    if (e.ctrlKey &&
        e.shiftKey &&
        e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }

    // Ctrl+Shift+C
    if (e.ctrlKey &&
        e.shiftKey &&
        e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }

    // Ctrl+Shift+J
    if (e.ctrlKey &&
        e.shiftKey &&
        e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }

    // Ctrl+U
    if (e.ctrlKey &&
        e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};

const experience =document.getElementById('experience');
const popup =document.getElementById('desktop-popup');
const ok =document.getElementById('popup-ok');

let shown = false;
window.addEventListener('scroll',
()=>{
    if(
       window.innerWidth <= 768 && !shown

    ){
        const top = experience
        .getBoundingClientRect()
        .top;
        if(
           top < window.innerHeight-150
        ){
            popup.style.display='flex';
            shown = true;
        }
    }
});

ok.addEventListener(
'click',
()=>{
   popup.style.display='none';
});