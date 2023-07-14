import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useRef } from 'react';
import { Car } from './Car'
import { Controls } from '../App';


const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 3;
const MAX_VEL = 3;
const RUN_VEL = 1.5;

export default function CarController() {

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);

  const rigidbody = useRef();
  const myCarRef = useRef();
  useFrame((state, delta) => {

    const impulse = { x: 0, y: 0, z: 0 };
    const linvel = rigidbody.current.linvel();
    let changeRotation = false;

    if (backPressed) {
      console.log("back pressed");
      impulse.z += MOVEMENT_SPEED;
    }
    
    if (forwardPressed) {
      console.log("forward pressed");
      impulse.z -= MOVEMENT_SPEED;
    }

    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }

    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      myCarRef.current.rotation.y = angle;
      // console.log(myCarRef);
    }

    rigidbody.current.applyImpulse(impulse, true);
  });

  // const resetPosition = () => {
  //   rigidbody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
  //   rigidbody.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }));
  // };


  return (
    <group>
      <RigidBody ref={rigidbody} position={[0.3, 1, 0]} gravity={1}>
        <group ref={myCarRef}>
          <Car rotation-y={Math.PI} scale={1.5}/>
        </group>
      </RigidBody>
    </group>
  )
}
