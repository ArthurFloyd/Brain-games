import startGame from '../general-logic.js';
import { getRandomNumber } from '../functions.js';

const rule = 'What is the result of the expression?';

const creatingExpression = (randomSign, firstRandomNumber, secondRandomNumber) => {
  switch (randomSign) {
    case '-':
      return firstRandomNumber - secondRandomNumber;
    case '+':
      return firstRandomNumber + secondRandomNumber;
    default:
      return firstRandomNumber * secondRandomNumber;
  }
};

const generatesAnswerAndQuestionForCalcGame = () => {
  const minNumber = 1;
  const maxNumber = 10;
  const minIndexSymbol = 0;
  const mathSymbols = ['-', '+', '*'];
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const randomSign = mathSymbols[getRandomNumber(minIndexSymbol, mathSymbols.length)];
  const correctAnswer = creatingExpression(randomSign, firstRandomNumber, secondRandomNumber);
  return [String(correctAnswer), `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`];
};

export default () => {
  startGame(rule, generatesAnswerAndQuestionForCalcGame);
};
