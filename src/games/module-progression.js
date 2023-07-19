import startGame from '../general-logic.js';
import { getRandomNumber } from './functions.js';

const rules = 'What number is missing in the progression?';

const creatingProgression = (
  progressionStart,
  arrayProgressions,
  progressionLength,
  progressionStep,
) => {
  for (
    let i = progressionStart;
    arrayProgressions.length !== progressionLength;
    i += progressionStep
  ) {
    arrayProgressions.push(i);
  }
  return arrayProgressions;
};

const generatesAnswerAndQuestionForProgressionGame = () => {
  const [minStepNumber, maxStepNumber] = [2, 5];
  const [minlengthNumber, maxlengthNumber] = [5, 11];
  const [minStartNumber, maxStartNumber] = [1, 50];
  const minHiddenNumber = 0;
  const arrayProgressions = [];
  const progressionStep = getRandomNumber(minStepNumber, maxStepNumber);
  const progressionLength = getRandomNumber(minlengthNumber, maxlengthNumber);
  const progressionStart = getRandomNumber(minStartNumber, maxStartNumber);
  const hiddenNumberIndex = getRandomNumber(minHiddenNumber, progressionLength - 1);
  creatingProgression(progressionStart, arrayProgressions, progressionLength, progressionStep);
  const correctAnswer = String(arrayProgressions[hiddenNumberIndex]);
  arrayProgressions[hiddenNumberIndex] = '..';
  return [correctAnswer, `${arrayProgressions.join(' ')}`];
};

export default () => {
  startGame(rules, generatesAnswerAndQuestionForProgressionGame);
};
