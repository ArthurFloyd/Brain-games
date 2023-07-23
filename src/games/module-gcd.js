import startGame from '../index.js';
import { getRandomNumber } from '../functions.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getGcdNumber = (firstRandomNumber, secondRandomNumber) => {
  let a = firstRandomNumber;
  let b = secondRandomNumber;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const generatesAnswerAndQuestionForGcdGame = () => {
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getGcdNumber(firstRandomNumber, secondRandomNumber);
  return [String(correctAnswer), question];
};

export default () => {
  startGame(rule, generatesAnswerAndQuestionForGcdGame);
};
