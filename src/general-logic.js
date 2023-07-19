import readlineSync from 'readline-sync';
import { recognizesPlayerName } from './games/functions.js';

const startGame = (rulse, insertsQuestionAndAnswer) => {
  const playerName = recognizesPlayerName();
  console.log(rulse);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i + 1) {
    const [correctAnswer, question] = insertsQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`,
      );
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
