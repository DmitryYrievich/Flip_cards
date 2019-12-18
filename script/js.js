const cards = document.querySelectorAll('.card');

const start = document.getElementById('start');

const music = document.getElementById('music');

let FlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function startGame() {
  music.play();
  cards.forEach(card => {
    const ramdomPos = randomInterval(1, cards.length);
    card.style.order = ramdomPos;
    card.classList.add('flip');
    setTimeout(() => {
      card.classList.remove('flip');
    }, 3000);
  });
}

function randomInterval(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}    

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!FlippedCard) {
    FlippedCard = true;
    firstCard = this;
  } else {
    FlippedCard = false;
    secondCard = this;
    checkCards();  
  }
}

function checkCards() {
  if (firstCard.dataset.id === secondCard.dataset.id) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      lockBoard = false;
    }, 1500);
  } 
}

const sound = document.getElementById('music');

const imgOnOff = document.getElementById('sundIco');

function mute() { 
  if (sound.muted) {    
    sound.muted = false;    
    imgOnOff.src = 'images/on.png';  
  } else {    
    sound.muted = true;   
    imgOnOff.src = 'images/off.png'; 
  }}

cards.forEach(card => card.addEventListener('click', flipCard));
start.addEventListener('click', startGame);

