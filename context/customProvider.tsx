import { createContext, useContext, useState } from "react"

import CustomizationContext from "../interfacesAndTypes/CustomizationContext"

import { ColorArrayCustom } from "../lib/colorForCustom"
import { LogoArrayCustom } from "../lib/logoForCustom"

const CustomizationContext = createContext<CustomizationContext | null>(null)

export function CustomizationProvider({ children } : {children : JSX.Element}) {
	const [color, setColor] = useState(ColorArrayCustom[0])
	const [logo, setLogo] = useState(LogoArrayCustom[0])
	const [logoColor, setLogoColor] = useState(ColorArrayCustom[0])
	const [size, setSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>('S')
	return (
		<CustomizationContext.Provider value={{
			color, 
			setColor,
			logo,
			setLogo,
			logoColor,
			setLogoColor,
			size,
			setSize
		}}>
			{children}
		</CustomizationContext.Provider>
	)
}

export function useCustomization() {
	return useContext(CustomizationContext)
}
