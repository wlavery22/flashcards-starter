const createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
} 

const createDeck = (cardObjArr) => {
  let deck = {
    deck: cardObjArr
  }
  return deck.deck;
} 

const countCards = (deckObjArr) => {
  return deckObjArr.length;
}

const createRound = (deck) => {
  let round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  }
  return round;
}

const takeTurn = (guess, round) => {
  round.turns += 1;
  round.currentCard = round.deck[round.turns - 1]
  const result = evaluateGuess(guess, round);
  console.log(result);
  if (result === "Incorrect") {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.currentCard = round.deck[round.turns];
  return round;
}

const evaluateGuess = (guess, round) => {
  if (guess === round.currentCard.correctAnswer) {
    return 'Correct'
  } else {
    return 'Incorrect'
  }
};

const endRound = (round) => {
  const finalMessage = (`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`)
  console.log(finalMessage)
  return finalMessage 
}

function calculatePercentCorrect(round) {
  const totalGuesses = round.deck.length;
  const totalIncorrectGuesses = round.incorrectGuesses.length;
  const correctGuesses = totalGuesses - totalIncorrectGuesses;
  const percentCorrect = Math.round((correctGuesses / totalGuesses) * 100)
  return percentCorrect
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  takeTurn, 
  createRound,
  calculatePercentCorrect
}
