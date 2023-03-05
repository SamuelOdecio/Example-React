import './style.css'

import { Title } from '../../components/Title'
import { SubTitle } from '../../components/SubTitle'
import { FormLogin } from '../../components/FormLogin'


export function Login() {
    return (
        <>
            <header>
                <Title text='Bem Vindo de Volta!' />
            </header>
            <main>
                <SubTitle text='Login' />
                <FormLogin/>
            </main>
        </>
    )
}