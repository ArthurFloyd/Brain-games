import readlineSync from 'readline-sync';
import { getRandomNumber, getGcdNumber } from './functions.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const gameStructure = () => {
    let movesCount = 0;
    while (movesCount <= 2) {
      let correctAnswer;
      const firstRandomNumber = getRandomNumber(1, 100);
      const secondRandomNumber = getRandomNumber(1, 100);
      console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
      const playerAnswer = readlineSync.question('Your answer: ');
      // eslint-disable-next-line prefer-const
      correctAnswer = getGcdNumber(firstRandomNumber, secondRandomNumber);
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
