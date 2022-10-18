import './index.scss';

import { useState} from 'react';

export default function Linha(){

    const [tamanho, setTamanho] = useState('');
    const [resul, setResul] = useState('');

    return(
        <section>
            <h1>Fazer a Linha</h1>
            <div>
                <input type='text' value={tamanho} onChange={e => setTamanho(e.target.value)}></input>
            </div>
            <div>
                <button></button>
            </div>
            <div>
                
            </div>
        </section>
    )
}