import playerGuidance from './cli.js';
import { progressionLogic } from './game-logic.js';
import generalLogic from './general-logic.js';

export default () => {
  const playerName = playerGuidance();
  console.log('What number is missing in the progression?');
  generalLogic(playerName, progressionLogic);
};
