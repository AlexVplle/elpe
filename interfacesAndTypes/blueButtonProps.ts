import { MouseEventHandler } from "react"

export default interface BlueButtonProps {
    content: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

