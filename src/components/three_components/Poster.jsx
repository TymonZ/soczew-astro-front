import { useGLTF, useTexture, Edges } from '@react-three/drei'
import { useState } from 'react'

export function Poster({ texturePath, handleClick }) {
	const { nodes, materials } = useGLTF('/models/poster.gltf')
	const texture = useTexture(texturePath)
	const [isHovered, setIsHovered] = useState(false)

	return (
		<mesh 
			geometry={nodes.Plane.geometry} 
			material={materials.Material002} 
			material-map={texture}
			scale={[0.66, 1, 1]}
			// position={[0, 0.2, 0]}
			// rotation={[1.3,3.2,3.2]}
			position={[0.1, 0.2, -0.2]}
			rotation={[0.8,2.4,3.3]}
			onPointerEnter={()=>setIsHovered(true)}
			onPointerLeave={()=>setIsHovered(false)}
			onClick={handleClick}
		>
			{isHovered ? <Edges scale={1} threshold={500} color="black" /> : null }
		</mesh>	
	)
}

useGLTF.preload('/models/poster.gltf')
