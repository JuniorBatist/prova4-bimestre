import './index.scss';
import { useState } from 'react';

export default function Prova(){
    const [pequeno, setPequeno] = useState('');
    const [media, setMedia] = useState('');
    const [grande, setGrande] = useState('');
    const [desconto, setDesconto] = useState('');
   
    function calcularAçai(qtdPeq, qtdMed, qtdGra, desc){
        let m='';
        qtdPeq = 13,50;
        qtdMed = 15,00;
        qtdGra = 17,50;
    }

    return(
        <section className='page-prova'>
            <div>
                <h1>Calcular Açai</h1>
                    Qdp:<input></input>
                    Qdm<input></input>
                    Qdg:<input></input>
                    Desconto:<input></input>
                <button className='botão'></button>
            </div>
        </section>
    )
}