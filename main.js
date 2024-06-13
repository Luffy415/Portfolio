var tl = gsap.timeline();
var typed = new Typed(".section__text__p2", {
    strings: ["Frontend Dev", "Tech geek", "Learner"],
    typeSpeed: 60,
    smartBackspace: false,
    cursorChar: "_",
    loop: true
});

function toggle() {
    const menu = document.querySelector(".menu-lings");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

tl.from(".logo", {
    opacity: 0,
    y: -50,
    duration: 0.5
});

tl.from(".nav-lings", {
    opacity: 0,
    y: -50
});

tl.from(".ham-icon", {
    opacity: 0,
    y: -50
});

tl.from("#profile .section__pic-container", {
    opacity: 0
});

tl.from(".section__text", {
    opacity: 0
});

gsap.from("#about .title", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about .title",
        scroller: "body",
        start: "top: 70%"
    }
});

gsap.from("#about .section__text__p1", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about .section__text__p1",
        scroller: "body",
        start: "top: 70%"
    }
});

gsap.from("#about .section__pic-container", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#about .section__pic-container",
        scroller: "body",
        start: "top: 60%"
    }
});

gsap.from(".about-details-container", {
    x: -380,
    scrollTrigger: {
        trigger: ".about-details-container",
        scroller: "body",
        start: "top: 50%"
    }
});

gsap.from("#experience", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#experience",
        scroller: "body",
        start: "top: 50%"
    }
});

gsap.from("#projects", {
    opacity: 0,
    y: -100,
    duration: 1,
    scrollTrigger: {
        trigger: "#projects",
        scroller: "body",
        start: "top: 50%"
    }
});

gsap.from("#contact", {
    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        start: "top: 50%"
    }
});
