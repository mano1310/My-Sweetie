document.addEventListener('DOMContentLoaded', function() {
    createFallingHearts();

    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const container = document.querySelector('.container');

    setTimeout(() => {
        container.classList.add('fade-in');
    }, 100);

    if (noButton) {
        noButton.addEventListener('mouseover', moveNoButton);
        noButton.addEventListener('click', noClicked);
    }

    if (yesButton) {
        yesButton.addEventListener('click', yesClicked);
    }

    const paragraphs = document.querySelectorAll('.message-container p');
    paragraphs.forEach((p, i) => {
        setTimeout(() => {
            p.classList.add('fade-in');
        }, 300 + i * 200);
    });
});

function createFallingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const numberOfHearts = 30;
    const heartSVG = `
        <svg class="heart" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ff3399" d="M16,28.261c0,0-14-7.926-14-17.046c0-8.565,9.333-11.816,14-4.312
            c4.667-7.504,14-4.252,14,4.312C30,20.335,16,28.261,16,28.261z"/>
        </svg>`;

    for (let i = 0; i < numberOfHearts; i++) {
        const heartDiv = document.createElement('div');
        heartDiv.innerHTML = heartSVG;
        const heart = heartDiv.firstElementChild;

        const size = Math.random() * 15 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 5;
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.5 + 0.3;

        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.opacity = opacity;

        heartsContainer.appendChild(heart);
    }
}

function moveNoButton(event) {
    const button = event.target;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

function noClicked() {
    const noButton = document.getElementById('noButton');
    noButton.classList.add('shake');
    setTimeout(() => noButton.classList.remove('shake'), 500);
    alert("Think again, our love story is just beginning! ❤️");
}

function yesClicked() {
    try {
        const audio = new Audio('https://freesound.org/data/previews/131/131660_2398403-lq.mp3');
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
        console.log('Audio play failed:', error);
    }

    alert("I knew you'd say YES! I love you so much! ❤️");

    createCelebration();

    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>You said YES! ❤️🎉</h1>
        <p>I promise to cherish and love you forever! ❤️</p>
        <p>You've made me the happiest person in the world! 🌟🦁</p>
        <a href="index.html" class="btn">Back to Love Letter</a>
    `;
}

function createCelebration() {
    const celebrationContainer = document.querySelector('.celebration-container');
    celebrationContainer.style.display = 'block';

    const colors = ['#ff3399', '#ff99cc', '#ffccff', '#ff66b3', '#990033'];
    const numConfetti = 150;

    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;

        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.left = `${left}%`;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.animationDelay = `${delay}s`;

        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else if (Math.random() > 0.5) {
            confetti.style.transform = 'rotate(45deg)';
        }

        celebrationContainer.appendChild(confetti);
    }

    setTimeout(() => {
        celebrationContainer.style.display = 'none';
        celebrationContainer.innerHTML = '';
    }, 5000);
}
