import { Suspense, useRef } from 'react'
import { Vector3, TextureLoader } from 'three'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Preload  } from '@react-three/drei'
import { Soczewiak } from './Soczewiak'
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
		const zoom = 5-(size.width/1200)
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

function MainBg({ posterTexturePath, handlePosterClick, handleSoczewiakClick, currentModel }) {	
	const models = {
		Soczewiak : <Soczewiak handleClick={handleSoczewiakClick}/>,
		Poster: <Poster texturePath={posterTexturePath} handleClick={handlePosterClick} />
	}

	return (
		<>
			<div id='3dPoster' className='w-screen h-screen absolute top-0 left-0 z-10'>
				<Canvas shadows camera={{position: [0,0,5]}}>
					<Suspense fallback={<CanvasLoader />}>
						<AnimatedBlock>
							{models[currentModel]}
						</AnimatedBlock>
						<ambientLight intensity={0} />
						<spotLight position={[10, 10, 10]} angle={0.5} power={4500} />
						<CameraRig />
					</Suspense>
					<Preload all />
				</Canvas>
			</div>
			<div 
				id='mainBackground' 
				className='w-screen h-screen absolute top-0 left-0 z-0 flex justify-center items-center'
				style={{
					filter: 'contrast(0.35) brightness(2) blur(80px)',
					WebkitFilter: 'contrast(0.35) brightness(2) blur(80px)',
					transform: 'translate3d(0, 0, 0)',
				}}
			>
				<img src={posterTexturePath} className='h-full w-full object-fill'/>
			</div>
		</>
	)
}

export default MainBg