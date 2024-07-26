import React, { useState } from 'react';
import ProjetoCard from './projetocard.jsx';
import './projeto.css';
import youtubeClone from '../../img/projeto-clone-youtube.jpg';
import rseries from '../../img/projeto-rseries.png';
import tempoAgora from '../../img/projeto-tempo-agora.png';
import starWarsCharacters from '../../img/projeto-star-wars-characters.jpg';
import groceryStore from '../../img/projeto-grocery-store.png';

export default function Projeto() {
    const [verMais, setVerMais] = useState(false);
    const [fraseBotao, setFraseBotao] = useState("Ver mais");

    const handleVerMaisClick = () => {
        if (verMais) {
            setVerMais(false);
            setFraseBotao('Ver mais');
        } else {
            setVerMais(true);
            setFraseBotao('Ver menos');
        }
    };

    return (
        <section id='projetos' className='limitar-secao secao-projetos'>
            <h4 className='titulo-projeto'>Hora de navegar em</h4>
            <h2 className='subtitulo-projeto'>Meus projetos</h2>
            <div className='secao-card-projetos'>
                <ProjetoCard
                    imagem={groceryStore}
                    titulo='Mercearia Online'
                    descricao='O site da Mercearia Online tem um design moderno e responsivo. Ele oferece uma experiência agradável aos usuários, tornando a exploração dos produtos e o fluxo de compra algo dinâmico e intuitivo. É possível criar uma conta e fazer login.'
                    tecnologias={['REACT.JS', 'NEXT', 'POSTGRESQL']}
                    hospedagemLink='https://grocery-store-jade.vercel.app/'
                    githubLink='https://github.com/RodrigoSerrasqueiro/grocery-store'
                />
                <ProjetoCard
                    imagem={youtubeClone}
                    titulo='Youtube Clone'
                    descricao='Um projeto que consome a própria API de dados do Youtube. Nele é possível criar uma conta, fazer login e publicar um video. Sua interface é bastante fiel a original e contém algumas funcionalidades como pesquisa e navegação por categorias.'
                    tecnologias={['REACT.JS', 'NODE', 'MONGO DB']}
                    hospedagemLink='https://youtube-project-ten.vercel.app/'
                    githubLink='https://github.com/RodrigoSerrasqueiro/Youtube-Project'
                />
                <ProjetoCard
                    imagem={rseries}
                    titulo='RSéries'
                    descricao='Um site que contém várias séries de TV. Utilizando a API do TMDB.org exibimos detalhes sobre cada série em uma experiência de navegação bastante atrativa. É possível pesquisar sobre uma determinada série e navegar por seções.'
                    tecnologias={['REACT.JS', 'TAILWIND', 'SHADCN']}
                    hospedagemLink='https://rseries.vercel.app/'
                    githubLink='https://github.com/RodrigoSerrasqueiro/Rseries'
                />
                {/* Se desejar, adicione mais ProjetoCard para outros projetos */}
            </div>

            <div className='secao-projeto-ver-mais'>
                {verMais && (
                    <div className='secao-card-projetos'>
                        <ProjetoCard
                            imagem={tempoAgora}
                            titulo='Tempo Agora'
                            descricao='O site Tempo Agora traz dados reais sobre o clima de qualquer cidade. Inicialmente o app solicita permissão para acessar a localização atual do usuário para exibir dados sobre o clima naquele momento, mas é possível pesquisar por cidades também.'
                            tecnologias={['HTML', 'CSS', 'JAVASCRIPT']}
                            hospedagemLink='https://rodrigoserrasqueiro.github.io/Tempo-Agora/'
                            githubLink='https://github.com/RodrigoSerrasqueiro/Tempo-Agora'
                        />

                        <ProjetoCard
                            imagem={starWarsCharacters}
                            titulo='Star Wars Characters'
                            descricao='Aqui temos várias informações sobre os personagens da saga Star Wars. Consumindo a API Swapi obtemos detalhes sobre mais de 80 personagens. É possível navegar entre as páginas e, clicando na foto do personagens, ver mais detalhes.'
                            tecnologias={['HTML', 'CSS', 'JAVASCRIPT']}
                            hospedagemLink='https://rodrigoserrasqueiro.github.io/Star-Wars-Characters/'
                            githubLink='https://github.com/RodrigoSerrasqueiro/Star-Wars-Characters'
                        />
                        {/* Adicione mais ProjetoCards aqui, se necessário */}
                    </div>
                )}
            </div>

            <div className='secao-botao-ver'>
                <button className='botao-ver' onClick={handleVerMaisClick}>{fraseBotao}</button>
            </div>
        </section>
    );
}
