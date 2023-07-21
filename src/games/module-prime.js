import startGame from '../general-logic.js';
import { getRandomNumber } from '../functions.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = (randomNumber) => {
  let correctAnswer = 'yes';
  if (randomNumber === 1) {
    correctAnswer = 'no';
  }
  if (randomNumber === 2) {
    correctAnswer = 'yes';
  }
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      correctAnswer = 'no';
    }
  }
  return correctAnswer;
};

const generatesAnswerAndQuestionForPrimeGame = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = getPrimeNumber(randomNumber);
  return [correctAnswer, `${randomNumber}`];
};

export default () => {
  startGame(rule, generatesAnswerAndQuestionForPrimeGame);
};
