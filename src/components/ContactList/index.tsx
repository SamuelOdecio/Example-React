import './style.css'
import { PerfilUsuario } from '../PerfilUsuario'
import { Input } from '../Input'
import { Title } from '../Title'

type ListaAgendaProps = {
    children: React.ReactNode
}

export function ContactList({children}: ListaAgendaProps) {
    return (
        <>
            <div className='ContactList'>
                <PerfilUsuario/>
                <PerfilUsuario/>
            </div>
        </>
    )
}