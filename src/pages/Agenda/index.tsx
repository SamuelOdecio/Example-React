import { Input } from '../../components/Input'
import { PerfilUsuario } from '../../components/PerfilUsuario'
import './style.css'


export function Agenda() {
    return (
        <>
        <h2>Agenda de Contatos</h2>
        <Input placeholder="Localizar" type='text' />
        <PerfilUsuario/>
        <PerfilUsuario/>
       </>
    )
}


