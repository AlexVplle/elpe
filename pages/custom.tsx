import { Stage, OrbitControls, useProgress, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { lazy, Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/custom.module.css'

const Model = lazy(() => import ('../components/Mascot'))

function Loader() {
	const { progress } = useProgress()
	return <Html center>{progress} % loaded</Html>
}

export default function Custom() {
	return (
		<>
			<Header elpeClub={false}/>
			<div className={styles.app}>
					<Canvas>
						<Suspense fallback={<Loader />}>
							<OrbitControls enablePan={false} minPolarAngle={-Math.PI / 2} maxPolarAngle={Math.PI / 2} minAzimuthAngle={- Math.PI / 2} maxAzimuthAngle={Math.PI / 2} maxDistance={8} minDistance={5} minZoom={10000} />
							<Stage environment="city" intensity={1}>
								<Model />
							</Stage>
						</Suspense>
					</Canvas>
			</div>
			<Footer />
		</>
	)
}
