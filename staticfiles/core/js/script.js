// Anti-Gravity Digital Space interactions

document.addEventListener('DOMContentLoaded', function () {

    // 1. Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00f0ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#7a00ff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // 2. Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth outline animation
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Cursor Hover Effect
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .magnetic');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '80px';
            cursorOutline.style.height = '80px';
            cursorOutline.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // 3. Magnetic Buttons Logic
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function (e) {
            const pos = this.getBoundingClientRect();
            const x = e.pageX - pos.left - pos.width / 2;
            const y = e.pageY - pos.top - pos.height / 2;

            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        el.addEventListener('mouseout', function () {
            this.style.transform = 'translate(0, 0)';
        });
    });

    // 4. Typing Animation
    if (document.getElementById('typed')) {
        new Typed('#typed', {
            strings: [
                'QUANTUM CODER',
                'PYTHON ARCHITECT',
                'FULL STACK ENTITY',
                'MCA VOYAGER'
            ],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
            cursorChar: '|'
        });
    }

    // 5. Sound Toggle Logic
    const soundToggle = document.getElementById('soundToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    soundToggle.addEventListener('click', () => {
        if (!isPlaying) {
            bgMusic.play().catch(e => console.log("Audio play blocked by browser"));
            soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            isPlaying = true;
        } else {
            bgMusic.pause();
            soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            isPlaying = false;
        }
    });

    // 6. Skill Bar Animation on Scroll
    const observerOptions = { threshold: 0.5 };
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const innerBar = entry.target.querySelector('.progress-inner');
                if (innerBar) {
                    const proficiency = innerBar.getAttribute('data-proficiency');
                    innerBar.style.width = proficiency + '%';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card-futuristic').forEach(item => {
        skillObserver.observe(item);
    });

    // 7. Mouse Parallax for Background Shapes
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;

        document.querySelectorAll('.cube, .sphere, .pyramid').forEach(shape => {
            shape.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 2}deg)`;
        });
    });

    // 8. Form Focus Interactions
    const inputs = document.querySelectorAll('.futuristic-form input, .futuristic-form textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });

});
