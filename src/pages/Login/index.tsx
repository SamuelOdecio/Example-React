

import { Title } from '../../components/Title'
import { SubTitle } from '../../components/SubTitle'
import { FormLogin } from '../../components/FormLogin'
import CssBaseline from '@mui/material/CssBaseline'


export function Login() {
    return (
        <CssBaseline>
        
            <header>
                <Title text='Bem Vindo de Volta!' />
            </header>
            <main>
                <SubTitle text='Login' />
                <FormLogin/>
            </main>
        </CssBaseline>
    )
}