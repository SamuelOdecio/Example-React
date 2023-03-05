import './style.css'

import { Button } from '../Button'
import { Input } from '../Input'

export function FormLogin() {
    return (
        <form action="">
            <Input placeholder='E-mail' type='email' />
            <Input placeholder='Senha' type='password' />
            <Button text="Entrar" type='primary' />
        </form>

    )
}