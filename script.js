const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard) return;
  this.classList.toggle('flip');

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  hasFlippedCard = false;
  secondCard = this;

  checkMatch();
}

function checkMatch() {
  //do cards match?
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unFlipCards() {
    lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
  }, 1500);
}

cards.forEach((card) => card.addEventListener('click', flipCard));
