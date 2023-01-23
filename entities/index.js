import Box from '../components/Box';
import { Dimensions } from 'react-native';
import Matter from 'matter-js';
import Ground from '../components/Ground';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  let Bodies = Matter.Bodies;
  
  var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  return {
    physics: { engine, world },
    Square: Box(world, 'lightpink', { x: 150, y: 120 }, { width: 80, height: 80 }),
    ground: Ground(world, 'black', { x: screenWidth/2, y: screenHeight-100}, { width: screenWidth+100, height: 2 }, {isStatic: true}),
  };
};
