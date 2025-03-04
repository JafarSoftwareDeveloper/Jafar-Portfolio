document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1200, once: false });

    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    new Typed('#typed-name', {
        strings: ["Jafar Bhathiyara"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: false
    });

    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00e6ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#8b5cf6", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Theme Toggle
    const modeToggle = document.getElementById("mode-toggle");
    const htmlRoot = document.getElementById("html-root");
    const isDarkMode = localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme");
    
    if (isDarkMode) {
        htmlRoot.setAttribute("data-theme", "dark");
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        htmlRoot.setAttribute("data-theme", "light");
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    modeToggle.addEventListener("click", () => {
        const currentTheme = htmlRoot.getAttribute("data-theme");
        if (currentTheme === "dark") {
            htmlRoot.setAttribute("data-theme", "light");
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem("theme", "light");
        } else {
            htmlRoot.setAttribute("data-theme", "dark");
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem("theme", "dark");
        }
    });
});