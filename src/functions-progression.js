import readlineSync from 'readline-sync';
import { getRandomNumber } from './functions.js';

export default () => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What number is missing in the progression?');

  const gameStructure = () => {
    let movesCount = 0;
    while (movesCount <= 2) {
      let correctAnswer;
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
      // eslint-disable-next-line prefer-const
      correctAnswer = arrayProgressions[hiddenNumberIndex];
      arrayProgressions[hiddenNumberIndex] = '..';
      console.log(`Question: ${arrayProgressions}`);
      const playerAnswer = readlineSync.question('Your answer: ');
      if (correctAnswer === Number(playerAnswer)) {
        console.log('Correct!');
        movesCount += 1;
      } else {
        console.log(
          `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
        );
        console.log(`Let's try again, ${playerName}!`);
        break;
      }
    }
    if (movesCount === 3) {
      console.log(`Congratulations, ${playerName}!`);
    }
  };
  gameStructure();
};
