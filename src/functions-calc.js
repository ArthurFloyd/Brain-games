import readlineSync from 'readline-sync';
import { getRandomNumber } from './functions.js';

export default () => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What is the result of the expression?');

  const gameStructure = () => {
    let movesCount = 0;
    const mathSymbols = ['+', '-', '*'];
    while (movesCount <= 2) {
      let correctAnswer = 0;
      const firstRandomNumber = getRandomNumber(1, 10);
      const secondRandomNumber = getRandomNumber(1, 10);
      const randomSign = mathSymbols[getRandomNumber(1, 3)];
      console.log(
        `Question: ${firstRandomNumber} ${randomSign} ${secondRandomNumber}`,
      );
      const playerAnswer = readlineSync.question('Your answer: ');
      if (randomSign === '-') {
        correctAnswer = firstRandomNumber - secondRandomNumber;
      } else if (randomSign === '+') {
        correctAnswer = firstRandomNumber + secondRandomNumber;
      } else if (randomSign === '*') {
        correctAnswer = firstRandomNumber * secondRandomNumber;
      }
      if (correctAnswer === Number(playerAnswer)) {
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
