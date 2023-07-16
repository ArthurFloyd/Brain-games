import playerGuidance from './cli.js';
import { evenLogic } from './game-logic.js';
import generalLogic from './general-logic.js';

export default () => {
  const playerName = playerGuidance();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  generalLogic(playerName, evenLogic);
};
