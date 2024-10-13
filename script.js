const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
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
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}

cards.forEach((card) => card.addEventListener('click', flipCard));
