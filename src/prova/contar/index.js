import './index.scss';

import { useState } from 'react';

export default function Conta(){

    const [ inicio, setInicio] = useState(0);
    const [ fim, setFim] = useState(0);
    const [ contar, setContar] = useState(0);


    function contarAte(){     
        let a = []         
        for(let cont = inicio; cont <= fim; cont++)
        a.push(cont)
        setContar(a +  '')
        
    }
    return(
        <section className='page-contar'>
            <div className=''>
                <h1>Contar</h1>
                inicio: <input type='text' value={inicio} onChange={e => setInicio (e.target.value)}/>
                fim: <input type='text' value={fim} onChange={e => setFim (e.target.value)}/>
            </div>
            <div>
                <button className='botao' onClick={ contarAte }> Contar até</button>
            </div>
            <div>
              {contar}
            </div>
        </section>
    )
}