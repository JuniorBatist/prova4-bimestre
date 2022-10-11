import './index.scss';
import { useState } from 'react';


export default function Salario(){
    const [salario, setSalario] = useState('');
    const [bonus, setBonus] = useState('');
    const [desc, setDesc] = useState('');
    const [resul, setResul] = useState('');

    function calcularTotal(){
        let x = salario * bonus / 100;
        let resul = x + salario - desc;
        setResul(resul);
    }

    return(
        <section className='page-salario'>
            <div>
                <h1>Calcular Sálario</h1>
               salario:<input type='text' value={salario} onChange={e => setSalario(Number(e.target.value))}></input>
                bonus:<input type='text' value={bonus} onChange={e => setBonus(Number(e.target.value))}></input>
                desconto:<input type='text' value={desc} onChange={e => setDesc(Number(e.target.value))}></input>
            </div>
            <div>
                <button className='botao' onClick={calcularTotal}> Verificar</button>
            </div>
            <div>{resul}</div>
        </section>
    )
}
