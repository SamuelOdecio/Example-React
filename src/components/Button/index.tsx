import { MouseEventHandler } from 'react'
import './style.css'
type ButtonProps = {
    text: string,
    type: "default" | "primary",
    onClick?:MouseEventHandler
}

export function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={`btn-${props.type}`}>{props.text}</button>
    )
}