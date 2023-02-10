import { Stage, OrbitControls, useProgress, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { lazy, Suspense } from 'react'

import Header from '../components/Header'
import Configurator from '../components/Configurator'

import { CustomizationProviderTee } from '../context/customProvider'

import styles from '../styles/custom.module.css'
import { Clothes } from '@prisma/client'

const Model = lazy(() => import ('../components/ELPEMascotTee'))

const Loader = () => <Html center>{useProgress().progress} % loaded</Html>

export default function ElpeByYouHoodie() {
	const tee : Clothes = {
		id: '1',
		name: 'ELPE BY YOU TEE',
		href: '/elpe-by-you-tee',
		src: ["byYou/teeByYou.png"],
		price: 25.99,
		description: []
	}
	return (
		<div className={styles.body}>
			<Header elpeClub={false}/>
			<CustomizationProviderTee>
				<div className={styles.app}>
						<div className={styles.canvas}>
							<Canvas>
								<Suspense fallback={<Loader />}>
									<OrbitControls enablePan={false} minPolarAngle={-Math.PI / 2} maxPolarAngle={Math.PI / 2} minAzimuthAngle={- Math.PI / 2} maxAzimuthAngle={Math.PI / 2} maxDistance={8} minDistance={5} minZoom={10000} />
									<Stage environment="city" intensity={0.2}>
										<Model />
									</Stage>
								</Suspense>
							</Canvas>
						</div>
						<Configurator clothes={tee}/>
				</div>
			</CustomizationProviderTee>
		</div>
	)
}
