import Box from '../components/Box';
import { Dimensions } from 'react-native';
import Matter from 'matter-js';
import Ground from '../components/Ground';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  let Bodies = Matter.Bodies;

  return {
    physics: { engine, world },
    Square: Box(world, 'lightpink', { x: 150, y: 120 }, { width: 80, height: 80 },),
    //Square2: Box(world, 'lightblue', { x: 250, y: 100 }, { width: 80, height: 80 }, ),
    Ground: Ground(world, 'black', { x: 196, y: 700}, { width: screenWidth, height: 2 },),
  };
};
