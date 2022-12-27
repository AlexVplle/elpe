import Values from './values'

export default interface contentInCart extends Required<Values> {
			name : string
			src : string
			href : string
			price : number
			alt : string
			id : string
			width : number
			height : number
}
