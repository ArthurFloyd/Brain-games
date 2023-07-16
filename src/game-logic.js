import isEven from 'is-even';
import { getRandomNumber, isPrimeNumber, getGcdNumber } from './functions.js';

const primeLogic = () => {
  const randomNumber = getRandomNumber(1, 100);
  let answer = isPrimeNumber(randomNumber);
  if (answer === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const correctAnswer = answer;
  const question = `${randomNumber}`;
  const arrayQuestionAndAnswer = [correctAnswer, question];
  return arrayQuestionAndAnswer;
};

const progressionLogic = () => {
  const arrayProgressions = [];
  const progressionStep = getRandomNumber(2, 5);
  const progressionLength = getRandomNumber(5, 11);
  const progressionStart = getRandomNumber(1, 50);
  const hiddenNumberIndex = getRandomNumber(0, progressionLength - 1);
  for (
    let i = progressionStart;
    arrayProgressions.length !== progressionLength;
    i += progressionStep
  ) {
    arrayProgressions.push(i);
  }
  const correctAnswer = arrayProgressions[hiddenNumberIndex];
  arrayProgressions[hiddenNumberIndex] = '..';
  const question = `${arrayProgressions.join(' ')}`;
  const arrayQuestionAndAnswer = [correctAnswer, question];
  return arrayQuestionAndAnswer;
};

const calcLogic = () => {
  let answer = 0;
  const mathSymbols = ['+', '-', '*'];
  const firstRandomNumber = getRandomNumber(1, 10);
  const secondRandomNumber = getRandomNumber(1, 10);
  const randomSign = mathSymbols[getRandomNumber(1, 3)];
  if (randomSign === '-') {
    answer = firstRandomNumber - secondRandomNumber;
  } else if (randomSign === '+') {
    answer = firstRandomNumber + secondRandomNumber;
  } else if (randomSign === '*') {
    answer = firstRandomNumber * secondRandomNumber;
  }
  const correctAnswer = answer;
  const question = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;
  const arrayQuestionAndAnswer = [correctAnswer, question];
  return arrayQuestionAndAnswer;
};

const evenLogic = () => {
  let answer;
  const randomNumber = getRandomNumber(1, 100);
  if (isEven(randomNumber)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const correctAnswer = answer;
  const question = `${randomNumber}`;
  const arrayQuestionAndAnswer = [correctAnswer, question];
  return arrayQuestionAndAnswer;
};

const gcdLogic = () => {
  const firstRandomNumber = getRandomNumber(1, 100);
  const secondRandomNumber = getRandomNumber(1, 100);
  const correctAnswer = getGcdNumber(firstRandomNumber, secondRandomNumber);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const arrayQuestionAndAnswer = [correctAnswer, question];
  return arrayQuestionAndAnswer;
};

export {
  primeLogic, progressionLogic, calcLogic, evenLogic, gcdLogic,
};
