import { getRandomNumber } from './functions.js';

const generatesAnswerAndQuestionForPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const [minNumber, maxNumber] = [1, 100];
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  let correctAnswer = 'yes';
  if (randomNumber === 1) {
    correctAnswer = 'no';
  }
  if (num === 2) {
    correctAnswer = 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      correctAnswer = 'no';
    }
  }
  return [correctAnswer, `${randomNumber}`];
};

const generatesAnswerAndQuestionForProgressionGame = () => {
  console.log('What number is missing in the progression?');
  const [minStepNumber, maxStepNumber] = [2, 5];
  const [minlengthNumber, maxlengthNumber] = [5, 11];
  const [minStartNumber, maxStartNumber] = [1, 50];
  const minHiddenNumber = 0;
  const arrayProgressions = [];
  const progressionStep = getRandomNumber(minStepNumber, maxStepNumber);
  const progressionLength = getRandomNumber(minlengthNumber, maxlengthNumber);
  const progressionStart = getRandomNumber(minStartNumber, maxStartNumber);
  const hiddenNumberIndex = getRandomNumber(minHiddenNumber, progressionLength - 1);
  function creatingProgression() {
    for (
      let i = progressionStart;
      arrayProgressions.length !== progressionLength;
      i += progressionStep
    ) {
      return arrayProgressions.push(i);
    }
  };
  creatingProgression();
  const correctAnswer = String(arrayProgressions[hiddenNumberIndex]);
  arrayProgressions[hiddenNumberIndex] = '..';
  return [correctAnswer, `${arrayProgressions.join(' ')}`];
};

const generatesAnswerAndQuestionForCalcGame = () => {
  console.log('What is the result of the expression?');
  const [minNumber, maxNumber] = [1, 10];
  const [minIndexSymbol, maxIndexSymbol] = [0, 3];
  let correctAnswer = 0;
  const mathSymbols = ['-', '+', '*'];
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const randomSign = mathSymbols[getRandomNumber(minIndexSymbol, maxIndexSymbol)];
  function creatingExpression() {
    if (randomSign === '-') {
      correctAnswer = firstRandomNumber - secondRandomNumber;
    } else if (randomSign === '+') {
      correctAnswer = firstRandomNumber + secondRandomNumber;
    } else if (randomSign === '*') {
      correctAnswer = firstRandomNumber * secondRandomNumber;
    }
    return correctAnswer;
  };
  creatingExpression();
  return [String(correctAnswer), `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`];
};

const generatesAnswerAndQuestionForEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const [minNumber, maxNumber] = [1, 100];
  let correctAnswer;
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [correctAnswer, `${randomNumber}`];
};

const generatesAnswerAndQuestionForGcdGame = () => { 
  console.log('Find the greatest common divisor of given numbers.');
  const [minNumber, maxNumber] = [1, 100];
  let firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  let secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstRandomNumber} ${secondRandomNumber}`
  while (firstRandomNumber !== secondRandomNumber) {
    if (firstRandomNumber > secondRandomNumber) {
      firstRandomNumber -= secondRandomNumber;
    } else {
      secondRandomNumber -= firstRandomNumber;
    }
  }
  return [String(firstRandomNumber), question];
};

export {
  generatesAnswerAndQuestionForCalcGame, generatesAnswerAndQuestionForEvenGame,
  generatesAnswerAndQuestionForGcdGame, generatesAnswerAndQuestionForPrimeGame,
  generatesAnswerAndQuestionForProgressionGame,
};
