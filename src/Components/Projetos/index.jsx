import React, { useState } from 'react';
import ProjetoCard from './projetocard.jsx';
import './projeto.css';
import home3 from '../../img/home3-site.png';
import ponto3 from '../../img/ponto3-site.png';
import ecommerce from '../../img/e-commerce.png';
import geizarabelo from '../../img/geiza-rabelo.png';
import starWarsCharacters from '../../img/projeto-star-wars-characters.jpg';

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
                    imagem={home3}
                    titulo='Freelancer Home3 Tecnologia'
                    descricao='O site da Home3 tecnologia tem um design moderno e responsivo. Ele oferece uma experiência agradável aos usuários, tornando a exploração da empresa de forma dinâmica e intuitivo.'
                    tecnologias={['JAVASCRIPT', 'HTML', 'CSS']}
                    hospedagemLink='https://home3tecnologia.com/'
                    githubLink='https://github.com/ryanmarinhodev/home3'
                />
                <ProjetoCard
                    imagem={ponto3}
                    titulo='Freelancer Ponto3 Arquit.'
                    descricao='Um projeto elegante para uma empresa de arquitetura, com uma galeria que permite troca dinâmica de imagens ao passar o cursor e navegação fácil entre os projetos através de um carrossel.'
                    tecnologias={['Javascript', 'HTML', 'CSS']}
                    hospedagemLink='https://ponto3arquitetura.com.br/'
                    githubLink='https://github.com/ryanmarinhodev/Site-ponto3'
                />
                <ProjetoCard
                    imagem={ecommerce}
                    titulo='e-Commerce'
                    descricao='Um site de comércio online que integra a API do Mercado Livre, oferecendo funcionalidades para busca de produtos, adição ao carrinho, remoção de itens e cálculo de preços.'
                    tecnologias={['REACT.JS', 'JAVASCRIPT', 'HTML', 'CSS']}
                    hospedagemLink='https://github.com/ryanmarinhodev/E-commerce'
                    githubLink='https://github.com/ryanmarinhodev/E-commerce'
                />
                {/* Projetos parte de cima */}
            </div>

            <div className='secao-projeto-ver-mais'>
                {verMais && (
                    <div className='secao-card-projetos'>
                        <ProjetoCard
                            imagem={geizarabelo}
                            titulo='Freelancer Instituto Rabelo'
                            descricao='O site do Instituto Rabelo destaca a clínica e a renomada Dra. Geiza Rabelo, cirurgiã-dentista em João Pessoa. Com animações em Javascript, e carrossel de imagens'
                            tecnologias={['JAVASCRIPT', 'HTML', 'CSS']}
                            hospedagemLink='https://institutorabelo.site/'
                            githubLink='https://github.com/ryanmarinhodev/instituto-rabelo'
                        />

                        <ProjetoCard
                            imagem={starWarsCharacters}
                            titulo='Star Wars Characters'
                            descricao='Aqui temos várias informações sobre os personagens da saga Star Wars. Consumindo a API Swapi obtemos detalhes sobre mais de 80 personagens. É possível navegar entre as páginas e, clicando na foto do personagens, ver mais detalhes.'
                            tecnologias={['HTML', 'CSS', 'JAVASCRIPT']}
                            hospedagemLink='https://github.com/ryanmarinhodev/teste'
                            githubLink='https://github.com/ryanmarinhodev/teste'
                        />
                    </div>
                )}
            </div>

            <div className='secao-botao-ver'>
                <button className='botao-ver' onClick={handleVerMaisClick}>{fraseBotao}</button>
            </div>
        </section>
    );
}
