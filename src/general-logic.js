import readlineSync from 'readline-sync';

const generalLogic = (playerName, logicGame) => {
  let movesCount = 0;
  while (movesCount <= 2) {
    const arrayQuestionAndAnswer = logicGame();
    console.log(`Question: ${arrayQuestionAndAnswer[1]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = arrayQuestionAndAnswer[0];
    let playerAnswer;
    if ((!Number(answer))) {
      playerAnswer = answer;
    } else {
      playerAnswer = Number(answer);
    }
    if (correctAnswer === playerAnswer) {
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

export default generalLogic;
