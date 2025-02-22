// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Matrix Rain Background
const canvas = document.getElementById("matrix-rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function animateMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'VT323', monospace`;
    ctx.fillStyle = "#00ff00";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#00ff00";

    drops.forEach((y, i) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });

    requestAnimationFrame(animateMatrix);
}

animateMatrix();
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / fontSize);
    drops.fill(0);
});

// Hero Animation
gsap.from(".hero .code-text", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power2.out"
});

gsap.from(".hero .subtitle", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out"
});

// Portfolio Animation
gsap.from(".section#portfolio .section-title", {
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out"
});

gsap.from(".section#portfolio .section-desc", {
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    x: -100,
    duration: 1.5,
    delay: 0.3,
    ease: "power2.out"
});

gsap.utils.toArray(".cyber-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 150,
        rotationX: i % 2 === 0 ? -30 : 30,
        duration: 1.8,
        ease: "elastic.out(1, 0.5)"
    });
});

// Publications Animation
gsap.from(".section#publications .section-title", {
    scrollTrigger: {
        trigger: "#publications",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    scale: 0.9,
    duration: 1.5,
    ease: "back.out(1.7)"
});

gsap.from(".section#publications .section-desc", {
    scrollTrigger: {
        trigger: "#publications",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    x: 100,
    duration: 1.5,
    delay: 0.3,
    ease: "power2.out"
});

gsap.utils.toArray(".publication-list li").forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        x: -120,
        duration: 1.8,
        delay: i * 0.5,
        ease: "power2.out"
    });
});

// Blog Animation
gsap.from(".section#blog .section-title", {
    scrollTrigger: {
        trigger: "#blog",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power2.out"
});

gsap.from(".section#blog .section-desc", {
    scrollTrigger: {
        trigger: "#blog",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    delay: 0.3,
    ease: "back.out(1.7)"
});

gsap.utils.toArray(".blog-card").forEach(post => {
    gsap.from(post, {
        scrollTrigger: {
            trigger: post,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        scale: 0.6,
        duration: 1.8,
        ease: "back.out(1.7)"
    });
});

// Contact Animation
gsap.from(".section#contact .section-title", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    rotation: 360,
    duration: 1.5,
    ease: "power2.out"
});

gsap.from(".section#contact .section-desc", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 100,
    duration: 1.5,
    delay: 0.3,
    ease: "power2.out"
});

gsap.from(".contact-container p", {
    scrollTrigger: {
        trigger: ".contact-container",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 100,
    duration: 1.8,
    stagger: 0.6,
    ease: "power2.out"
});

// Footer Animation
gsap.from("footer p", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "back.out(1.7)"
});

// Navbar Scroll Effect
gsap.to(".navbar", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderBottomColor: "#00ff00",
    boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)",
    duration: 1
});

// Random Animations
setInterval(() => {
    gsap.to(".cyber-card", {
        boxShadow: "0 0 20px rgba(0, 255, 0, 0.7)",
        duration: 0.9,
        ease: "power1.inOut",
        repeat: 1,
        yoyo: true,
        stagger: 0.4
    });
}, 2500);

setInterval(() => {
    gsap.to(".section-title", {
        textShadow: "0 0 15px rgba(0, 255, 0, 1)",
        duration: 0.6,
        ease: "power1.inOut",
        repeat: 1,
        yoyo: true,
        stagger: 0.2
    });
}, 1800);

setInterval(() => {
    gsap.to(".nav-links a", {
        scale: 1.15,
        duration: 0.5,
        ease: "power1.inOut",
        repeat: 1,
        yoyo: true,
        stagger: 0.2
    });
}, 3500);

// Navbar Link Click Animation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        gsap.to(window, {
            scrollTo: { y: targetSection, offsetY: 50 }, // Offset for navbar height
            duration: 1.5,
            ease: "power2.inOut",
            onStart: () => {
                gsap.to(link, {
                    scale: 1.2,
                    opacity: 0.5,
                    duration: 0.3,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: 1
                });
            }
        });
    });
});

// Tilt Effect
VanillaTilt.init(document.querySelectorAll(".cyber-card"), {
    max: 25,
    speed: 500,
    glare: true,
    "max-glare": 0.6
});

// Audio Control
const audio = document.getElementById("background-music");
const audioToggle = document.querySelector(".audio-toggle");
let isPlaying = false;

audioToggle.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        audioToggle.textContent = "♪";
    } else {
        audio.play();
        audioToggle.textContent = "♫";
    }
    isPlaying = !isPlaying;
});

// Navbar Toggle for Mobile
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});