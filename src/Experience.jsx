import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { World } from './components/World'
import { Debug, RigidBody } from '@react-three/rapier'
import CarController from './components/CarController'




export default function Experience()
{

    return <>
        <Perf position="top-left" />
        <axesHelper args={[5]} />
        <Debug />

        {/* <Environment preset="sunset" /> */}
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <directionalLight position={[5, 5, 5]} intensity={0.3} castShadow color={"#9e69da"} />
        <ambientLight intensity={ 0.5 } />

        <CarController></CarController>

        {/* <RigidBody type='fixed' friction={0}> */}
            <World />
        {/* </RigidBody> */}
        <RigidBody type='fixed' friction={0}>
            <mesh position={[-1, -1, 0]} >
                <boxBufferGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color="gray" />
            </mesh>
        </RigidBody>


    </>
}