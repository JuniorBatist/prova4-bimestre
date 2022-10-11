import './index.scss';
import { useState } from 'react';

export default function Paradas(){

    const [capac, setCapac] = useState();
    const [consumo, setConsumo] = useState();
    const [dist, setDist] = useState();
    const [resul, setResul] = useState();

    function calcularParadas(){
        let x = dist /consumo;
        let resul = x / capac;
        resul = Math.ceil(resul);   
        setResul(resul);
    }

    return(
        <section className='page-paradas'>
            <h1>Verificar Quantidade de Paradas</h1>
            <div>
               Capac:<input type='text' value={capac} onChange={e => setCapac(e.target.value)}></input>
               Consumo: <input type='text' value={consumo} onChange={e => setConsumo(e.target.value)}></input>
               Distancia:<input type='text' value={dist} onChange={e => setDist(e.target.value)}></input>
            </div>
            <div>
                <button className='botao' onClick={calcularParadas}>Verificar</button>
            </div>
            <div>{resul}</div>
        </section>
    )
}