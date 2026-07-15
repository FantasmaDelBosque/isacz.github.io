


window.addEventListener('load', () => {

    // ===== GALERÍA =====

    const pieces = document.querySelectorAll('.piece');

    const layouts = [
        [
            { x: 100, y: 100 },
            { x: 800, y: 800 },
            { x: 1200, y: 250 },
            { x: 1800, y: 450 },
            { x: 2500, y: 150 },
            { x: 3000, y: 500 },
            { x: 3500, y: 100 },
            { x: 4000, y: 700 },
            { x: 4700, y: 300 },
            { x: 5300, y: 800 },
            { x: 6000, y: 400 }
        ],

        [
            { x: 200, y: 500 },
            { x: 900, y: 180 },
            { x: 1400, y: 700 },
            { x: 2000, y: 250 },
            { x: 3500, y: 850 },
            { x: 2900, y: 350 },
            { x: 3800, y: 200 },
            { x: 4400, y: 200 },
            { x: 5000, y: 550 },
            { x: 5600, y: 300 },
            { x: 6200, y: 800 }
        ],

        [
            { x: 250, y: 250 },
            { x: 850, y: 750 },
            { x: 1300, y: 200 },
            { x: 1900, y: 600 },
            { x: 2800, y: 300 },
            { x: 3100, y: 850 },
            { x: 3700, y: 200 },
            { x: 4300, y: 650 },
            { x: 5000, y: 250 },
            { x: 5600, y: 900 },
            { x: 6200, y: 500 }
        ]
    ];

    const selectedLayout =
        layouts[Math.floor(Math.random() * layouts.length)];

    const SAFE_WIDTH = 6800;

    pieces.forEach((piece, index) => {

        const layoutIndex = index % 11;
        const row = Math.floor(index / 11);

        let x = selectedLayout[layoutIndex].x;
        const y =
            selectedLayout[layoutIndex].y +
            (row * 950);

        const width = piece.offsetWidth;

        if (x + width > SAFE_WIDTH) {
            x = SAFE_WIDTH - width;
        }

        piece.style.left = `${x}px`;
        piece.style.top = `${y}px`;

        const rotation = (Math.random() * 8) - 4;

        piece.style.transform = `rotate(${rotation}deg)`;
    });


    // ===== MENÚ MOBILE =====

    const button = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (button && menu) {

        button.addEventListener('click', () => {

            menu.classList.toggle('active');

            if (menu.classList.contains('active')) {
                button.textContent = '×';
            } else {
                button.textContent = '+';
            }

        });

    }


    // ===== VIDEO =====

    const videos = document.querySelectorAll('.video-piece video');

    videos.forEach((video) => {

        const videoPiece = video.closest('.video-piece');

        if (!videoPiece) return;

        video.currentTime = 0;

        videoPiece.addEventListener('mouseenter', () => {
            video.play().catch(() => {
                // Evita errores si el navegador bloquea la reproducción.
            });
        });

        videoPiece.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });

    });

});


// ===== SCROLL HORIZONTAL =====

window.addEventListener('wheel', (event) => {

    if (event.shiftKey) {

        event.preventDefault();

        window.scrollBy({
            left: event.deltaY,
            behavior: 'smooth'
        });

    }

}, { passive: false });