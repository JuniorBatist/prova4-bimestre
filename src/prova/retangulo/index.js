import './index.scss';
import { useState } from 'react';

export default function Retangulo(){

    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [resul, setResul] = useState('');

    function fzrRetangulo(){
        for (let cont = 1; cont <= base; cont++){
            if ( cont = 1; cont <= altura; cont++)
        }

    }

    return(
        <section className='page-retangulo'>
            <h1>Fazer Retangulo</h1>
            <div>
                base:<input type='text' value={base} onChange={e => setBase(e.target.value)}></input>
                altura:<input type='text' value={altura} onChange={e => setAltura(e.target.value)}></input>
            </div>
            <div>
                <button className='botao'>Fazer retangulo</button>
            </div>
            <div>
                {resul}
            </div>
        </section>
    )
}