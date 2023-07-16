import playerGuidance from './cli.js';
import { calcLogic } from './game-logic.js';
import generalLogic from './general-logic.js';

export default () => {
  const playerName = playerGuidance();
  console.log('What is the result of the expression?');
  generalLogic(playerName, calcLogic);
};
