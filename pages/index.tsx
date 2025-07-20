import { useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'

export default function Index() {
	const router : NextRouter = useRouter()
	
	useEffect(() => {
		router.push('/home')
	}, [router])

	return null
}
