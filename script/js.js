const cards = document.querySelectorAll('.card');

let FlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if (!FlippedCard) {
    FlippedCard = true;
    firsCard = this;
  } else {
    FlippedCard = false;
    secondCard = this;
    
    if (firsCard.dataset.id === secondCard.dataset.id) {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    } else {
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }, 1500);
    }

    
  }
}

// Array.prototype.shuffle2 = function () {
//     this.forEach(
//         function (v, i, a) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [a[i], a[j]] = [a[j], a[i]];
//         }
//     );
//     return this;
// }

cards.forEach(card => card.addEventListener('click', flipCard));

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
// function arrayShuffle(o) {
//     for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//     return o;
// }
  