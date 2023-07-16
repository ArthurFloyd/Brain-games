import playerGuidance from './cli.js';
import { primeLogic } from './game-logic.js';
import generalLogic from './general-logic.js';

export default () => {
  const playerName = playerGuidance();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  generalLogic(playerName, primeLogic);
};
