import './index.scss';
import { useState } from 'react';

export default function Febre(){

    const[temperatura, setTemperatura] = useState('');
    const[resul, setResul] = useState('');

    function situacaoFebre(){

        if(temperatura >= 41){
            setResul('Hipertermia');
        }

        else if(temperatura >= 39.6 && temperatura < 41){
            setResul('Febre alta');
        }

        else if(temperatura >= 37.6 && temperatura < 39.6){
            setResul('Febre');
        }

        else if(temperatura >= 36 && temperatura < 37.6){
            setResul('Normal');
        }
    
        else if(temperatura <= 36){
            setResul('Hipotermia');
        }
    
    }
    return(
        <section className='page-temp'>
            <h1>Verificar se está com febre</h1>
            <div>
    Informe a temperatura: <input type='text' value={temperatura} onChange={e => setTemperatura(e.target.value)}/>
                    <button className='botao' onClick={situacaoFebre}> Verificar</button>
            </div>
            <div>
                {resul}
            </div>
        </section>


    )
}