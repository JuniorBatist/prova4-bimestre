import './index.scss';
import { useState } from 'react';

export default function Prova(){
    const [qtdPeq, setPequeno] = useState();
    const [qtdMed, setMedia] = useState();
    const [qtdGra, setGrande] = useState();
    const [desconto, setDesconto] = useState();
    const [resul, setResul] = useState('');
   
    function calcularAçai(){
        let x = qtdPeq + qtdMed + qtdGra / desconto;
        setResul(x);
    }

    return(
        <section className='page-prova'>
            <div>
                <h1>Calcular Açai</h1>
                    Qdp:<input type="number" value={qtdPeq} onChange={e => setPequeno(Number(e.target.value))} ></input>
                    Qdm<input type='number' value={qtdMed} onChange= {e => setMedia(Number(e.target.value))}></input>
                    Qdg:<input type='number' value={qtdGra} onChange= {e => setGrande(Number(e.target.value))}></input>
                    Desconto:<input type='number' value={desconto} onChange= {e => setDesconto(Number(e.target.value))}></input>
                <button className='botão' onClick ={calcularAçai}></button>
                <div>{resul}</div>
            </div>
        </section>
    )
}