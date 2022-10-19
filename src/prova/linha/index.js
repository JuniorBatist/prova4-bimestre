import './index.scss';

import { useState} from 'react';

export default function Linha(){

    const [tamanho, setTamanho] = useState('');
    const [resul, setResul] = useState('');

    function linha(){
        let a = [];
        for (let cont = 1; cont <= tamanho; cont++){
            a.push('*')
            setResul( a );

        }

            
    }

    return(
        <section className='page-linha'>
            <h1>Fazer a Linha</h1>
            <div>
                <input type='text' value={tamanho} onChange={e => setTamanho(e.target.value)}></input>
            </div>
            <div>
                <button className='botao'onClick={linha}> Fazer linha</button>
            </div>
            <div>
                {resul}
            </div>
        </section>
    )
}