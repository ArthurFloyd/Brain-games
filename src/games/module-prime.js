import startGame from '../general-logic.js';
import { getRandomNumber } from './functions.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatesAnswerAndQuestionForPrimeGame = () => {
  const [minNumber, maxNumber] = [1, 100];
  const randomNumber = getRandomNumber(minNumber, maxNumber);
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
  return [correctAnswer, `${randomNumber}`];
};

export default () => {
  startGame(rules, generatesAnswerAndQuestionForPrimeGame);
};
