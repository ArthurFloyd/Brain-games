import startGame from '../general-logic.js';
import { getRandomNumber } from '../functions.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;

const generatesAnswerAndQuestionForEvenGame = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, `${randomNumber}`];
};

export default () => {
  startGame(rule, generatesAnswerAndQuestionForEvenGame);
};
