const emojis = [
    '😎', '🤪', '🦄', '🌈',
    '🍕', '🎸', '🚀', '🎮'
];

const cards = [...emojis, ...emojis];
let flippedCards = [];
let moves = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCard(emoji, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<span style="font-size: 60px;">${emoji}</span>`;
    card.dataset.index = index;
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (flippedCards.length === 2) return;
    if (this.classList.contains('flipped')) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        moves++;
        document.getElementById('moves').textContent = moves;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.innerHTML === card2.innerHTML;

    if (match) {
        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }

    checkWin();
}

function checkWin() {
    const allCards = document.querySelectorAll('.card');
    const allFlipped = Array.from(allCards).every(card => 
        card.classList.contains('flipped')
    );

    if (allFlipped) {
        setTimeout(() => {
            alert(`Congratulations! You won in ${moves} moves!`);
            resetGame();
        }, 500);
    }
}

function resetGame() {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';
    moves = 0;
    document.getElementById('moves').textContent = moves;
    initGame();
}

function initGame() {
    const shuffledCards = shuffle(cards);
    const gameContainer = document.getElementById('gameContainer');
    
    shuffledCards.forEach((emoji, index) => {
        const card = createCard(emoji, index);
        gameContainer.appendChild(card);
    });
}

initGame();
