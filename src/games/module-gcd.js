import startGame from '../general-logic.js';
import { getRandomNumber } from './functions.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generatesAnswerAndQuestionForGcdGame = () => {
  const [minNumber, maxNumber] = [1, 100];
  let firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  let secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  while (firstRandomNumber !== secondRandomNumber) {
    if (firstRandomNumber > secondRandomNumber) {
      firstRandomNumber -= secondRandomNumber;
    } else {
      secondRandomNumber -= firstRandomNumber;
    }
  }
  return [String(firstRandomNumber), question];
};

export default () => {
  startGame(rules, generatesAnswerAndQuestionForGcdGame);
};
