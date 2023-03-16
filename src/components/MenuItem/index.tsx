import { User } from 'phosphor-react'
import './style.css'

type MenuItemProps = {
    icon:React.ReactNode
    text:string
}
export function MenuItem({icon,text}:MenuItemProps){
    return (
        <>
        <div>
            <a href="#" className="menuItem">
                {icon}{text}
            </a>
        </div>
        </>
    )
}