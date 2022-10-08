import './index.scss';
import { useState } from 'react';

export default function Calculo () {
    const[qtdPeq, setPeq] = useState();
    const[qtdMed, setMed] = useState();
    const[qtdGra, setGra] = useState();
    const[desc, setDesconto] = useState(0);
    const [resul ,setResul] = useState();


    function calcularAçai () {
        let x = qtdPeq * 13.5 + qtdMed * 15 + qtdGra * 17.5;
        let resul = x - (x * (desc/100));
        setResul(resul);


    }

    return(
        <section className='page-prova'>
            <div>
                <h1>Calcular Açai</h1>
                    Qdp:<input type='text 'value={qtdPeq} onChange={e => setPeq(Number(e.target.value))} ></input>
                    Qdm<input type='number' value={qtdMed} onChange= {e => setMed(Number(e.target.value))}></input>
                    Qdg:<input type='number' value={qtdGra} onChange= {e => setGra(Number(e.target.value))}></input>
                    Desconto:<input type='number' value={desc} onChange= {e => setDesconto(Number(e.target.value))}></input>
                <button className='botão' onClick ={calcularAçai}></button>
                <div>{resul}</div>
            </div>
        </section>
    )
}