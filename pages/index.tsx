import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'

import HeadAPP from '../components/Head'

import styles from '../styles/index.module.css'
import { useEffect } from 'react'

export default function Index() {
	const router : NextRouter = useRouter()
	const redirectHome = function() {
		router.push('/home')
		document.getElementById('text')!.style.display = 'none'
		document.getElementById('logo')!.style.display = 'inline-block'
	}
	useEffect(() => {
		const handleClick = () => {
      	const videoElement = document.getElementById("video") as HTMLVideoElement;
      	if (videoElement && videoElement.paused) {
        		videoElement.play();
      	}
    	};
    document.body.addEventListener('DOMContentLoaded', handleClick);

    return () => {
      document.body.removeEventListener('DOMContentLoaded', handleClick);
    };
  }, []);
	return (
		<div className={styles.body}>
			<HeadAPP />
			<video autoPlay loop muted playsInline className={styles.video} id="video" src="clothes/elpeAccessories/home.mp4" >
			</video>
			<button className={styles.button} onClick={redirectHome}><div className={styles.textButton} id='text'>Entrez →</div><div className={styles.logo} id="logo"><Image src="/icons/logo.gif" width={70} height={70} alt={"test"}/></div></button>
		</div>
	)
}
