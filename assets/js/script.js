// ==========================================
// MAIN.JS
// Place inside:
// assets/js/main.js
// ==========================================

console.log("MAIN JS LOADED");

/* ==========================================
   NAVBAR TOGGLE
========================================== */

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Scroll Top Button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top')
                .classList.add('active');
        } else {
            document.querySelector('#scroll-top')
                .classList.remove('active');
        }

        // Scroll Spy
        $('section').each(function () {

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {

                $('.navbar ul li a')
                    .removeClass('active');

                $('.navbar')
                    .find(`[href="#${id}"]`)
                    .addClass('active');
            }
        });
    });

    // ==========================================
    // SMOOTH SCROLLING
    // ==========================================

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');

    });

});

/* ==========================================
   TAB TITLE CHANGE
========================================== */

document.addEventListener('visibilitychange', function () {

    if (document.visibilityState === "visible") {

        document.title = "Portfolio | Zahid Jamal";

        $("#favicon").attr(
            "href",
            "./assets/images/favicon.jpg"
        );

    } else {

        document.title = "Come Back | Zahid Jamal";

        $("#favicon").attr(
            "href",
            "./assets/images/favicon.jpg"
        );
    }
});


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


/* ==========================================
   CONSOLE SUCCESS
========================================== */

console.log("ALL FEATURES WORKING SUCCESSFULLY");