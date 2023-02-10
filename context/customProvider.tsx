import { createContext, useContext, useState } from "react"

import CustomizationContext from "../interfacesAndTypes/CustomizationContext"

import { ColorLogo, ColorHoodieBase, ColorTeeBase } from "../lib/colorForCustom"
import { LogoArrayCustom } from "../lib/logoForCustom"

const CustomizationContextTee = createContext<CustomizationContext | null>(null)
const CustomizationContextHoodie = createContext<CustomizationContext | null>(null)

export function CustomizationProviderTee({ children } : {children : JSX.Element}) {
	const [color, setColor] = useState(ColorTeeBase[0])
	const [logo, setLogo] = useState(LogoArrayCustom[0])
	const [logoColor, setLogoColor] = useState(ColorLogo[0])
	return (
		<CustomizationContextTee.Provider value={{
			color, 
			setColor,
			logo,
			setLogo,
			logoColor,
			setLogoColor,
		}}>
			{children}
		</CustomizationContextTee.Provider>
	)
}

export function CustomizationProviderHoodie({ children } : {children : JSX.Element}) {
	const [color, setColor] = useState(ColorHoodieBase[0])
	const [logo, setLogo] = useState(LogoArrayCustom[0])
	const [logoColor, setLogoColor] = useState(ColorLogo[0])
	return (
		<CustomizationContextHoodie.Provider value={{
			color, 
			setColor,
			logo,
			setLogo,
			logoColor,
			setLogoColor,
		}}>
			{children}
		</CustomizationContextHoodie.Provider>
	)
}

export function useCustomizationHoodie() {
	return useContext(CustomizationContextHoodie)
}

export function useCustomizationTee() {
	return useContext(CustomizationContextTee)
}
