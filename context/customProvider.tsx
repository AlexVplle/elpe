import { createContext, useContext, useState } from "react";

import { ColorArrayCustom } from "../lib/colorForCustom";
import { LogoArrayCustom } from "../lib/logoForCustom";

const CustomizationContext = createContext<any>({})

export function CustomizationProvider(props : {children : JSX.Element}) {
	const [color, setColor] = useState(ColorArrayCustom[0])
	const [logo, setLogo] = useState(LogoArrayCustom[0])
	const [logoColor, setLogoColor] = useState(ColorArrayCustom[0])
	const [size, setSize] = useState('S')
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
			{props.children}
		</CustomizationContext.Provider>
	)
}

export function useCustomization() {
	const context = useContext(CustomizationContext)
	return context
}
