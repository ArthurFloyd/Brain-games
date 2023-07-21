import startGame from '../general-logic.js';
import { getRandomNumber } from '../functions.js';

const rule = 'What number is missing in the progression?';

const creatingProgression = (progressionStart, progressionLength, progressionStep) => {
  const arrayProgressions = [];
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
  const minStepNumber = 2;
  const maxStepNumber = 5;
  const minlengthNumber = 5;
  const maxlengthNumber = 11;
  const minStartNumber = 1;
  const maxStartNumber = 50;
  const minHiddenNumber = 0;
  const progressionStep = getRandomNumber(minStepNumber, maxStepNumber);
  const progressionLength = getRandomNumber(minlengthNumber, maxlengthNumber);
  const progressionStart = getRandomNumber(minStartNumber, maxStartNumber);
  const hiddenNumberIndex = getRandomNumber(minHiddenNumber, progressionLength - 1);
  const arrayProgressions = creatingProgression(
    progressionStart,
    progressionLength,
    progressionStep,
  );
  const correctAnswer = String(arrayProgressions[hiddenNumberIndex]);
  arrayProgressions[hiddenNumberIndex] = '..';
  return [correctAnswer, `${arrayProgressions.join(' ')}`];
};

export default () => {
  startGame(rule, generatesAnswerAndQuestionForProgressionGame);
};
