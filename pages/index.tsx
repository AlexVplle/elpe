import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'

import HeadAPP from '../components/Head'

import styles from '../styles/index.module.css'
import { Canvas } from '@react-three/fiber'
import { lazy, Suspense } from 'react'
import { Html, OrbitControls, Stage, useProgress } from '@react-three/drei'
import { CustomizationProviderTee } from '../context/customProvider'

const Loader = () => <Html center>{useProgress().progress} % loaded</Html>

const Model = lazy(() => import ('../components/ELPEMascotTee'))

export default function Index() {
	const router : NextRouter = useRouter()
	const redirectHome = function() {
		router.push('/home')
		document.getElementById('text')!.style.display = 'none'
		document.getElementById('logo')!.style.display = 'inline-block'
	}
	return (
		<>
			<HeadAPP />
			<div className={styles.main}>
				<CustomizationProviderTee>
					<Canvas className={styles.canvas}>
						<Suspense fallback={<Loader />}>
							<OrbitControls enablePan={false} minPolarAngle={-Math.PI / 2} maxPolarAngle={Math.PI / 2} minAzimuthAngle={- Math.PI / 2} maxAzimuthAngle={Math.PI / 2} maxDistance={8} minDistance={5} minZoom={10000} />
							<Stage environment="city" intensity={0.5}>
								<Model />
							</Stage>
						</Suspense>
					</Canvas>
				</CustomizationProviderTee>
				<button className={styles.button} onClick={redirectHome}><div className='text' id='text'>Entrez →</div><div className={styles.logo} id="logo"><Image src="/icons/blackLogo.gif" width={70} height={70} alt={"test"}/></div></button>
			</div>
		</>
	)
}
