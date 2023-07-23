import startGame from '../index.js';
import { getRandomNumber } from '../functions.js';

const rule = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;
const minIndexSymbol = 0;
const mathSymbols = ['-', '+', '*'];

const calculateExpression = (randomSign, firstRandomNumber, secondRandomNumber) => {
  switch (randomSign) {
    case '-':
      return firstRandomNumber - secondRandomNumber;
    case '+':
      return firstRandomNumber + secondRandomNumber;
    case '*':
      return firstRandomNumber * secondRandomNumber;
    default:
      throw new Error(`Unknown sign: '${randomSign}'!`);
  }
};

const generatesAnswerAndQuestionForCalcGame = () => {
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const randomSign = mathSymbols[getRandomNumber(minIndexSymbol, mathSymbols.length)];
  const correctAnswer = calculateExpression(randomSign, firstRandomNumber, secondRandomNumber);
  return [String(correctAnswer), `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`];
};

export default () => {
  startGame(rule, generatesAnswerAndQuestionForCalcGame);
};
