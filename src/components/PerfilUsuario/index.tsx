import './style.css'

import { Button } from '../Button'


export function PerfilUsuario() {
    return (
        <>
            <div className='Usuario'>
                <div className='LayoutUsuario'>
                    <div className='FotoUsuario'>
                        <img src="https://randomuser.me/api/portraits/men/68.jpg"></img>
                    </div>
                    <div className='DadosUsuario'>
                        <b>NOME SOBRENOME</b>
                        <a>estudante12345@estudante.ifms.edu.br</a>
                        <Button text='Detalhes' type='usuario' />
                    </div>
                </div>

            </div>
        </>
    )
}