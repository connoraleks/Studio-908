import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

function Cube(props) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const { viewport } = useThree()
  const [scale, setScale] = useState(viewport.width/5)
  useEffect(() =>{
    if(viewport.width < viewport.height) setScale(viewport.height/5);
    else setScale(viewport.width/5);
  }, [viewport])
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={(scale) * (active ? 1.25 : 1)}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry />
      <meshStandardMaterial color={hovered ? 'hotpink' : props.color} />
    </mesh>
  )
}

export default function ThreeBox({color}) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube color={color}/>
    </Canvas>
  )
}
