import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


function Box(props) {
  const ref = useRef(null)
  let directionX = (Math.random() < 0.5 ? -1 : 1)* 0.01;
  let directionY = (Math.random() < 0.5 ? -1 : 1)* 0.01;
  const geom = useMemo(() => <boxGeometry args={[props.size,props.size,props.size]} />, [])
  const mat = useMemo(() => <meshPhongMaterial color={props.color} />, [])

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.005; 
    ref.current.rotation.y += 0.005;
    if(props.animate === false) return;
    ref.current.position.x += directionX;
    ref.current.position.y += directionY;
    if(Math.abs(ref.current.position.x) > (window.innerWidth/100)) directionX *= -1;
    if(Math.abs(ref.current.position.y) > (window.innerHeight/100)) directionY *= -1;
  })
  return (
    <mesh
        {...props}
        ref={ref}
        >
        {mat}
        {geom}
    </mesh>
  )
}
const ThreeBox = (props) =>{
  const numBoxes = props.numBoxes;
  const boxes = [];
  for(let i = 0; i < numBoxes; i++) boxes.push(<Box position={props.animate === false ? [0,0,0] : [(window.innerWidth/100) * (Math.random()-Math.random()), (window.innerHeight/100) * (Math.random()-Math.random()), 0]} color={props.color} size={props.size} animate={props.animate}/>)
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.5} penumbra={0.25} />
      {boxes}
    </Canvas>
  );
}
export default ThreeBox;