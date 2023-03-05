import './style.css'

type SubTileProps = {
    text: string
}

export function SubTitle(props:SubTileProps){
    return(
        <h2>{props.text}</h2>
    )
}