import './index.scss';
import { useState } from 'react';

export default function Signo(){
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState('');
    const [resul, setResul] = useState('');
  
    function verSigno(){

        if(mes == 9 && dia >= 23 || mes == 10 <= 22){ 
            setResul('Sim');
            }
    
        else if (mes == 10 && dia > 22 ){
            setResul('Não');
        }

        else{
            setResul('Não');
        }
    }


    
    return(
        <section className='page-signo'>
            <div className='page'>
                <h1>Verificar Signo</h1>
              Mês: <input type='number' value={mes} onChange={e => setMes(e.target.value)}></input>
               Dia:<input type='number' value={dia} onChange={e => setDia(e.target.value)}></input>

                <button className='botão' onClick={verSigno}> Verifica</button>

                <div>{resul}</div>
            </div>
        </section>
    )
}