import './sobre.css';

import imagemSobre from '../../img/imagem-sobre1.png'

export default function Sobre() {
    return (
        <section   className='limitar-secao secao-sobre'>
          <img src={imagemSobre} alt="imagem-sobre"/>
          <article className="sobre-descricao">
                        <h4>Quem sou eu?</h4>
                        <h2>Ryan Marinho,</h2>
                        <h2>Desenvolvedor Front-End</h2>
                        <p id='skills'>
                            Atuando como desenvolvedor web desde abril de 2023, sou apaixonado por transformar ideias em realidade, criando soluções que atendam às necessidades específicas de cada cliente. Sou um profissional proativo, autodidata e com excelente capacidade de comunicação, o que me permite colaborar de forma eficaz em cada projeto que participo.
                        </p>
                    </article>
        </section>
    )
}