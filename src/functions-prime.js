import readlineSync from 'readline-sync';
import { getRandomNumber, isPrimeNumber } from './functions.js';

export default () => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const gameStructure = () => {
    let movesCount = 0;
    while (movesCount <= 2) {
      const randomNumber = getRandomNumber(1, 100);
      console.log(`Question: ${randomNumber}`);
      const playerAnswer = readlineSync.question('Your answer: ');
      let correctAnswer = isPrimeNumber(randomNumber);
      if (correctAnswer === true) {
        correctAnswer = 'yes';
      } else {
        correctAnswer = 'no';
      }
      if (correctAnswer === playerAnswer) {
        console.log('Correct!');
        // eslint-disable-next-line no-const-assign
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
