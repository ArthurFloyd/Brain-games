import startGame from '../general-logic.js';
import { getRandomNumber } from './functions.js';

const rules = 'What is the result of the expression?';

const creatingExpression = (randomSign, firstRandomNumber, secondRandomNumber) => {
  let correctAnswer = 0;
  if (randomSign === '-') {
    correctAnswer = firstRandomNumber - secondRandomNumber;
  } else if (randomSign === '+') {
    correctAnswer = firstRandomNumber + secondRandomNumber;
  } else if (randomSign === '*') {
    correctAnswer = firstRandomNumber * secondRandomNumber;
  }
  return correctAnswer;
};

const generatesAnswerAndQuestionForCalcGame = () => {
  const [minNumber, maxNumber] = [1, 10];
  const [minIndexSymbol, maxIndexSymbol] = [0, 3];
  const mathSymbols = ['-', '+', '*'];
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const randomSign = mathSymbols[getRandomNumber(minIndexSymbol, maxIndexSymbol)];
  const correctAnswer = creatingExpression(randomSign, firstRandomNumber, secondRandomNumber);
  return [String(correctAnswer), `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`];
};

export default () => {
  startGame(rules, generatesAnswerAndQuestionForCalcGame);
};
