import { Stage, OrbitControls, useProgress, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { lazy, Suspense } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Configurator from '../components/Configurator'

import { CustomizationProvider } from '../context/customProvider'

import styles from '../styles/custom.module.css'
import { Clothes } from '@prisma/client'

const Model = lazy(() => import ('../components/ELPEMascotHoodie'))

const Loader = () => <Html center>{useProgress().progress} % loaded</Html>

export default function ElpeByYouHoodie() {
	const hoodie : Clothes = {
		id: '1',
		name: 'ELPE BY YOU HOODIE',
		href: '/elpe-by-you-hoodie',
		src: ["teeBipolar/front.png"],
		price: 59.99,
		description: []
	}
	return (
		<>
			<Header elpeClub={false}/>
			<CustomizationProvider>
				<div className={styles.app}>
						<div className={styles.canvas}>
							<Canvas>
								<Suspense fallback={<Loader />}>
									<OrbitControls enablePan={false} minPolarAngle={-Math.PI / 2} maxPolarAngle={Math.PI / 2} minAzimuthAngle={- Math.PI / 2} maxAzimuthAngle={Math.PI / 2} maxDistance={8} minDistance={5} minZoom={10000} />
									<Stage environment="city" intensity={0.5}>
										<Model />
									</Stage>
								</Suspense>
							</Canvas>
						</div>
						<Configurator clothes={hoodie}/>
				</div>
			</CustomizationProvider>
			<Footer />
		</>
	)
}
