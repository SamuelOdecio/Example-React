import './style.css'

import { Title } from '../../components/Title';
import { FormRegister } from '../../components/FormRegister';

type RegisterProps = {

}

export function Register(props: RegisterProps) {
    return (
        <>
            <header>
                <Title text='Criar Conta' />
            </header>
            <main>
                <FormRegister />
            </main>

        </>
    );
}