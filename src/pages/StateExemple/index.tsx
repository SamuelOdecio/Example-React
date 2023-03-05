import './styles.css'

import { useState } from 'react';

export function StateExemple() {

    const [name, setName] = useState('');

    console.log('renderizou');
//    let name = 'Caio';

    function handleInput(event){

        setName(event.target.value);
        console.log(name);
        
    }

    return (
        <>
            <input onInput={handleInput} className='inputName' type="text" />
            <h1>{`Olá ${name}`}</h1>
        </>
    );
}