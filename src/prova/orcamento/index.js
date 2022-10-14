import './index.scss';
import { useState } from 'react';

export default function Orcamento(){

    const [ganhos, setGanhos] = useState('');
    const [gastos, setGastos] = useState('');
    const [resul, setResul] = useState('');

    function sitOrcamento(){
        
        if(gastos > ganhos){
            setResul('Orçamento comprometido! Hora de rever seus gastos!')
        }

    }

    return(
        <section className='page-orçamento'>
            <h1>Orçamento Familiar</h1>
            <div>
                ganhos: <input type='text' value={ganhos} onChange={e => setGanhos(e.target.value)} ></input>
                ganhos: <input type='text' value={gastos} onChange={e => setGastos(e.target.value)}></input>
            </div>
            <div>
                <button onClik={sitOrcamento}className='botao'>Verificar</button>
            </div>
            <div>
                {resul}
            </div>
        </section>
    )
}