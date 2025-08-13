document.addEventListener('DOMContentLoaded', () => {

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Hero Section Intro Animation ---
    gsap.to("#hero", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.from("#hero > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.4
    });

    // --- Staggered Section Animations on Scroll ---
    const sections = document.querySelectorAll('section:not(#hero)');

    sections.forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
                toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        });

        // Animate elements within the section
        const elements = section.querySelectorAll('.hover-lift, .project-card');
        gsap.from(elements, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    });

    // --- Menu Button (for future use) ---
    const menuBtn = document.getElementById('menu-btn');
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Placeholder for menu functionality
            alert('Menu functionality can be added here!');
        });
    }
});
