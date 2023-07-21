import readlineSync from 'readline-sync';
import { recognizesPlayerName } from './functions.js';

const startGame = (rule, generatesAnswerAndQuestion) => {
  const playerName = recognizesPlayerName();
  console.log(rule);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [correctAnswer, question] = generatesAnswerAndQuestion();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`,
      );
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
