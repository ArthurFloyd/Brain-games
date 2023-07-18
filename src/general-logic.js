import readlineSync from 'readline-sync';
import playerGuidance from './cli.js';

const comparesCorrectAnswerAndPlayer = (insertsQuestionAndAnswer) => {
  const playerName = playerGuidance();
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
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${playerName}!`
      );
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default comparesCorrectAnswerAndPlayer;
