import startGame from '../index.js';
import { getRandomNumber } from '../functions.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isNumberPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return randomNumber !== 1;
};

const generatesAnswerAndQuestionForPrimeGame = () => {
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isNumberPrime(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, `${randomNumber}`];
};

export default () => {
  startGame(rule, generatesAnswerAndQuestionForPrimeGame);
};
