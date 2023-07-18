import readlineSync from 'readline-sync';
import playerGuidance from './cli.js';

const comparesCorrectAnswerAndPlayer = (insertsQuestionAndAnswer) => {
  const playerName = playerGuidance();
  const arrayRulse = insertsQuestionAndAnswer();
  console.log(arrayRulse[2]);
  for (let i = 0; i < 3; i + 1) {
    const arrayQuestionAndAnswer = insertsQuestionAndAnswer();
    const [correctAnswer, question] = arrayQuestionAndAnswer;

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

export default comparesCorrectAnswerAndPlayer;
