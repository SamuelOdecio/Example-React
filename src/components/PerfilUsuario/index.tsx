import './style.css'
import { Contact } from '../../types'
import { Button } from '../Button'

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
                        <Button text='Detalhes' type='usuario' />
                    </div>
                </div>

            </div>
        </>
    )
}