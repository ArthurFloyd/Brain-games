import getRandomNumber from '../functions.js';

const generatesAnswerAndQuestionForPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
  return [correctAnswer, `${randomNumber}`, rules];
};

const generatesAnswerAndQuestionForProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
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
      arrayProgressions.push(i);
    }
    return arrayProgressions;
  };
  creatingProgression();
  const correctAnswer = String(arrayProgressions[hiddenNumberIndex]);
  arrayProgressions[hiddenNumberIndex] = '..';
  return [correctAnswer, `${arrayProgressions.join(' ')}`, rules];
};

const generatesAnswerAndQuestionForCalcGame = () => {
  const rules = 'What is the result of the expression?';
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
  return [String(correctAnswer), `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`, rules];
};

const generatesAnswerAndQuestionForEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const [minNumber, maxNumber] = [1, 100];
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  let correctAnswer;
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [correctAnswer, `${randomNumber}`, rules];
};

const generatesAnswerAndQuestionForGcdGame = () => { 
  const rules = 'Find the greatest common divisor of given numbers.';
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
  return [String(firstRandomNumber), question, rules];
};

export {
  generatesAnswerAndQuestionForCalcGame, generatesAnswerAndQuestionForEvenGame,
  generatesAnswerAndQuestionForGcdGame, generatesAnswerAndQuestionForPrimeGame,
  generatesAnswerAndQuestionForProgressionGame,
};
