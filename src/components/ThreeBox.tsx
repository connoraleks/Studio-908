import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


function Box(props) {
  const ref = useRef(null)
  const [clicked, click] = useState(false)
  const [directionX,setDirectionX] = useState((Math.random() < 0.5 ? -1 : 1)* 0.01);
  const [directionY, setDirectionY] = useState((Math.random() < 0.5 ? -1 : 1) * 0.01);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.005; 
    ref.current.rotation.y += 0.005;
    if(props.animate === false) return;
    ref.current.position.x += directionX;
    ref.current.position.y += directionY;
    if(Math.abs(ref.current.position.x) > (window.innerWidth/100)) setDirectionX(directionX * -1);
    if(Math.abs(ref.current.position.y) > (window.innerHeight/100)) setDirectionY(directionY * -1);
  })
  return (
    <mesh
        {...props}
        ref={ref}
        onClick={(event) => click(!clicked)}>
        {props.mat}
        {props.geom}
    </mesh>
  )
}
const ThreeBox = (props) =>{
  const geom = useMemo(() => <boxGeometry args={[props.size,props.size,props.size]} />, [])
  const mat = useMemo(() => <meshPhongMaterial color={props.color} />, [])
  const numBoxes = props.numBoxes;
  const boxes = [];
  for(let i = 0; i < numBoxes; i++) boxes.push(<Box position={props.animate === false ? [0,0,0] : [(window.innerWidth/100) * (Math.random()-Math.random()), (window.innerHeight/100) * (Math.random()-Math.random()), 0]} geom={geom} mat={mat} animate={props.animate}/>)
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.5} penumbra={0.25} />
      {boxes}
    </Canvas>
  );
}
export default ThreeBox;