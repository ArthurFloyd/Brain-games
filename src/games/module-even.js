import startGame from '../general-logic.js';
import { getRandomNumber } from './functions.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generatesAnswerAndQuestionForEvenGame = () => {
  const [minNumber, maxNumber] = [1, 100];
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  let correctAnswer;
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [correctAnswer, `${randomNumber}`];
};

export default () => {
  startGame(rules, generatesAnswerAndQuestionForEvenGame);
};
