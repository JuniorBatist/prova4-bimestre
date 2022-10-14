import './index.scss';
import { useState } from 'react';

export default function Ingresso(){

    const[inteiras, setInteiras] = useState(0);
    const[meias, setMeias] = useState(0);
    const[dia, setDia] = useState('');
    const[nacional, setNacional] = useState(false);
    const[resul, setResul] = useState('');

   function CalcularIngresso(){
    let total ='';
    
    if (nacional === true){
        total=(inteiras + meias) * 5;
    }

    else if (dia === 'quarta'){
        total= (inteiras + meias) * 14.25;
    }
    else{
        total = inteiras * 28 + meias * 14.25;
    }
    setResul(total);
   }
       
    return(
        <section className='page-ingresso'>
            <h1>Calcular Ingresso</h1>
        <div className='inp'>
            inteiras:<input type='text' value={inteiras} onChange={e => setInteiras(Number(e.target.value))}/>
            meias: <input type='text' value={meias} onChange={e => setMeias(Number(e.target.value))}/>
            dia: <input type='text' value={dia} onChange={e => setDia(e.target.value)}/>
            nacional:<input type='text' value={nacional} onChange={e => setNacional(e.target.value)}/>
        </div>

        <div>
            <button className='botao' onClick={CalcularIngresso}> Verificar</button>
        </div>

        <div>
            {resul}
        </div>
    </section>
    )
}
