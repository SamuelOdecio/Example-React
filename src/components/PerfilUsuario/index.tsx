import './style.css'
import { Contact } from '../../types'
import { Button } from '../Button'
import BasicButtons from '../ButtonMui'

type PerfilUsuarioProps = {
    contactData: Contact,
}

export function PerfilUsuario({ contactData }: PerfilUsuarioProps) {
    const { name, email, picture } = contactData
    return (
        <>
            <div className='Usuario'>
                <div className='LayoutUsuario'>
                    <div className='FotoUsuario'>
                        <img src={picture.medium}></img>
                    </div>
                    <div className='DadosUsuario'>
                        <p>{name.first}</p>
                        <p>{email}</p>
                        <Button variant="contained">Contained</Button>
                    </div>
                </div>

            </div>
        </>
    )
}