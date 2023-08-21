import { Suspense, useRef } from 'react'
import { Vector3 } from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload  } from '@react-three/drei'
import { Poster } from './Poster'

function CanvasLoader() {
	return (
		<mesh scale={0.1}>
			<sphereGeometry />
			<meshBasicMaterial color={0x000000}/>
		</mesh>
	)
}

function CameraRig() {
	const { camera, mouse, size } = useThree()
	const positionVec = new Vector3()
  
	return useFrame(() => {
		const zoom = 5-(size.width/1000)
	  	camera.position.lerp(positionVec.set(-mouse.x/3, 1-mouse.y/2, zoom), 0.05)
	  	camera.lookAt(0, 0, 0)
	})
}

function AnimatedBlock({ children }) {
	const animatedGroup = useRef()

	useFrame(({ clock }) => {
		animatedGroup.current.position.y = Math.sin(clock.getElapsedTime())/30
	})

	return (
		<group ref={animatedGroup} scale={[2.5,2.5,2.5]}>
			{ children }
		</group>
	)
}

function MainBg({ posterTexturePath, handlePosterClick }) {	
	return (
		<div id='mainBg' className='w-screen h-screen absolute top-0 left-0 z-10'>
			<Canvas shadows camera={{position: [0,0,5]}}>
				<Suspense fallback={<CanvasLoader />}>
					<AnimatedBlock>
						<Poster texturePath={posterTexturePath} handleClick={handlePosterClick} />	
					</AnimatedBlock>
					<ambientLight intensity={0.3} />
					<spotLight position={[10, 20, 10]} angle={0.5} power={9000} />
					<CameraRig />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	)
}

export default MainBg