import { Dispatch, SetStateAction } from "react";

export default interface CustomizationContext {
	color: { name: string, color: string }
	setColor: Dispatch<SetStateAction<{ name: string, color: string }>>
	logo: { name: string, location: string }
	setLogo: Dispatch<SetStateAction<{ name: string, location: string }>>
	logoColor: { name: string, color: string }
	setLogoColor: Dispatch<SetStateAction<{ name: string, color: string }>>
	size: 'S' | 'M' | 'L' | 'XL' | 'XXL'
	setSize: Dispatch<SetStateAction<'S' | 'M' | 'L' | 'XL' | 'XXL'>>
}
