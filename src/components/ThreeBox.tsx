import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef(null)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [directionX,setDirectionX] = useState(0.01);
  const [directionY, setDirectionY] = useState(0.01);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.005; 
    ref.current.rotation.y += 0.005;
    ref.current.position.x += directionX;
    ref.current.position.y += directionY;
    if(Math.abs(ref.current.position.x) > window.innerWidth/200) setDirectionX(directionX * -1);
    if(Math.abs(ref.current.position.y) > window.innerHeight/200) setDirectionY(directionY * -1);
  })
  return (
    <mesh
        {...props}
        ref={ref}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[1]} />
        <meshStandardMaterial color={hovered ? 'red' : 'blue'} />
    </mesh>
  )
}
const ThreeBox = (props) =>{
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
      <ambientLight />
      <pointLight position={[0, 0, 2]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}
export default ThreeBox;