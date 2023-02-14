const SanValentinHeart = (colorHeart = 'red') => {
    const heartContainer = document.createElement('div');
    heartContainer.id = 'hearts-container';
    heartContainer.style.position = 'absolute';
    heartContainer.style.height = '100vh';
    heartContainer.style.zIndex = '49';

    const heartStyle = document.createElement('style');
    heartStyle.textContent = `
        .heart {
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml;utf8,<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="1189.000000pt" viewBox="0 0 1280.000000 1189.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)" fill="${colorHeart}" stroke="none"> <path d="M3300 11879 c-41 -4 -127 -13 -190 -19 -1345 -137 -2509 -1081 -2929 -2373 -92 -285 -130 -484 -172 -912 -22 -230 19 -755 87 -1110 202 -1050 721 -1930 1730 -2940 338 -338 530 -513 1544 -1407 1220 -1075 1863 -1733 2502 -2558 140 -181 384 -519 394 -545 5 -12 30 -15 133 -15 l127 0 16 28 c39 66 282 412 401 572 420 564 917 1121 1498 1680 377 363 638 600 1454 1325 929 826 1400 1299 1806 1815 721 916 1048 1786 1096 2915 5 117 -2 221 -33 490 -116 1004 -680 1917 -1534 2482 -433 286 -953 481 -1450 542 -317 40 -501 48 -649 31 -47 -6 -147 -17 -221 -25 -938 -105 -1802 -610 -2383 -1392 -41 -57 -84 -116 -93 -133 -23 -38 -45 -38 -68 0 -72 124 -279 374 -446 540 -548 548 -1274 900 -2030 985 -74 8 -174 19 -221 25 -98 11 -258 11 -369 -1z"/> </g> </svg>');
        background-size: contain;
        animation: heart 3s ease-in-out infinite;
        }

        @keyframes heart {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-20px);
        }

        100% {
            transform: translateY(0);
        }
        }
    `;

    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.scrollY + Math.random() * window.innerHeight + 'px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    };

    setInterval(createHeart, 500);

    const updateContainerHeight = () => {
        heartContainer.style.height = window.innerHeight + 'px';
    };

    window.addEventListener('resize', updateContainerHeight);
    updateContainerHeight();
    document.body.prepend(heartContainer);
    document.head.appendChild(heartStyle);
}

modules.export = {
    SanValentinHeart
}