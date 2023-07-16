import playerGuidance from './cli.js';
import { gcdLogic } from './game-logic.js';
import generalLogic from './general-logic.js';

export default () => {
  const playerName = playerGuidance();
  console.log('Find the greatest common divisor of given numbers.');
  generalLogic(playerName, gcdLogic);
};
