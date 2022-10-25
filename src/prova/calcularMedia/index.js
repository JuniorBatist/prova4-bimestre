import './index.scss';
import { useState } from 'react';

export default function CalcularMedia(){

    const [total, setTotal] = useState('')
    const [qtdAlunos, setQtdAlunos] = useState('');
    const [inp, setInputs] = useState('');

    function Alunos(){
        let a = [];
        for (let cont = 1; cont <= qtdAlunos; cont++){
            a.push(cont)
            setInputs( a );
        }
            
    }

    

    return(
        <section className='page-calcular-media'>
            <h1>Calcular Media</h1>
                Qtd Alunos:<input>{qtdAlunos}</input>
                <button>{ setQtdAlunos}</button>

            <div className='alunos'>

               {setInputs.map(item =>
                    <input>{item.inp}</input>
               )}

            </div>

            <div>
                Média:<div></div>
                Maior:<div></div>
                Menor:<div></div>
            </div>

            
        </section>
    )
}