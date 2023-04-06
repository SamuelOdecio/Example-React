

import { Title } from '../../components/Title';
import { FormRegister } from '../../components/FormRegister';
import { CssBaseline } from '@mui/material';

type RegisterProps = {

}

export function Register(props: RegisterProps) {
    return (

        <CssBaseline>
            <header>
                <Title text='Criar Conta' />
            </header>
            <main>
                <FormRegister />
            </main>
        </CssBaseline>

    );
}