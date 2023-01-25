import {View} from 'react-native';
import Matter from 'matter-js';

const Box = (props) => {
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;
  
  return (
    <View
      style={{
        width: width,
        height: height,
        left: xPos,
        top: yPos,
        backgroundColor: props.color,
        position: 'relative',
      }}
    ></View>
  );
};

export default (world, color, pos, size) => {
  const box = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Box', frictionAir: 0, friction: 0 } 
  );
  Matter.World.add(world, box);
  return { body: box, color, pos, renderer: <Box /> };
};
