import './index.scss';
import { useState } from 'react';

export default function Sorveteria(){
    const [gramas, setGramas] = useState('');
    const [resul, setResul] = useState('');

    function calcularTotal(){

        let resul = gramas * 3.50;
        setResul (resul);

    }

    return(
        <section className='page-sorvete'>
           <div>
                <h1>Compra de sorvete</h1>
               Gramas: <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} />
                        <button onClick={calcularTotal}>Calcular</button>
                        {resul}
           </div>
            
        </section>

    )
}