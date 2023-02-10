import { useEffect, useState } from "react"

import HeaderWeb from "./HeaderWeb"
import HeaderPhone from "./HeaderPhone"

import HeaderProps from "../interfacesAndTypes/headerProps"

export default function Header({ elpeClub } : HeaderProps) {
	const [isPhone, setIsPhone] = useState<number>(2)
	useEffect(() => {
		const match : MediaQueryList = window.matchMedia('(max-width: 640px)')
		const matchOrNot = function(){
			setIsPhone(match.matches ? 1 : 0)
		}
		match.addEventListener('change', matchOrNot)
		if (isPhone == 2)
			matchOrNot()
		return () => match.removeEventListener('change', matchOrNot)
	})
	return (
		<>
			{isPhone ? <HeaderPhone /> : <HeaderWeb elpeClub={elpeClub} />}
		</>
	)
}
