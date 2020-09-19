import React from 'react';

import './styles.css';

import bgimg from '../../assets/images/mulherCartao.jpg';
import lefthand from '../../assets/images/maoEsquerda.png';
import floatingcards from '../../assets/images/cartoesFlutuando.png';





function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="image-background">
                    <img src={bgimg} alt="mulher segurando cartao"/>
                    <h2>Ser Nubank é reinventar a sua vida financeira</h2>
                </div>
            </div> 

            <div id="page-landing-content" className="container2">
                <div id="black-rectangle">
                    <h2>Conta digital do Nubank</h2>
                    <h3>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas</h3>

                    <img src={lefthand} alt="mao esquerda segurando celular"/>
                </div>
                <div id="white-rectangle">
                <h2>Cartão de Crédito</h2>
                    <img src={floatingcards} alt="cartoes flutuando"/>
                   <h3>Moderno, simples e gratuito. Tudo para deixar o controle com você.</h3>
                </div>
            </div>                 
        </div>        

    )
}

export default Landing; 
