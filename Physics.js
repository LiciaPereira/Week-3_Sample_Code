import Matter from 'matter-js';

const Physics = (entities, { touches, time }) => {
  
  let engine = entities.physics.engine;
  
  // engine.world.gravity.x = 0.01; //to move horizontally
  // engine.world.gravity.y = 0.01; //to move vertically 
  
  engine.world.gravity.y = 0; //no gravity - no fall 
  
  
  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      //Matter.Body.applyForce(
      //  entities.Square.body,
      //  entities.Square.body.position,
      //  { x: 0.005, y: 0.05 } //F=ma
      //);
      Matter.Body.setVelocity(entities.Square.body, {
        x: 0, //move along x-axis with given velocity
        y: 5, //move along y-axis with given velocity 
      });
      Matter.Events.on(engine, "collisionStart", (event) => {
        var pairs = event.pairs;

        var groundlabel = pairs[0].label
        var boxlabel = pairs[0].label;

        if(boxlabel == 'Box' && groundlabel == 'Ground') {
          Matter.Body.setPosition(entities.Square.body, {
              x: 0, //move along x-axis with given velocity
              y: -50, //move along y-axis with given velocity 
          });
        }
      })
  });
  
 
 Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
