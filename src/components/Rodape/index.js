import React, { Component, Fragment } from "react";
import "./styles.css";
import logo from "../../assets/img/logouems.jpg";
import email from "../../assets/img/email.png";
import telefone from "../../assets/img/telefone.png";
import endereco from "../../assets/img/endereco.png";

class Rodape extends Component {

    render() {
        return (
            <Fragment>
                <div id="section-rodape">
                    <div className="content-rodape">
                        <div className="img-uems">
                            <img src={logo} alt="..." />
                        </div>

                        <h1>Dados de Contato e Endereço</h1>
                        <div className="card1">
                            <div className="img-email">
                                <img src={email} alt="..." />
                            </div>
                            <p>cadesembargador@gmail.com</p>
                        </div>
                        <div className="card1">
                            <div className="img-email">
                                <img src={telefone} alt="..." />
                            </div>
                            <p>+55 67 98117-7918 | +55 67 9823-7255</p>
                        </div>
                        <div className="card1">
                            <div className="img-email">
                                <img src={endereco} alt="..." />
                            </div>
                            <p>Avenida João Rodrigues de Melo – Jardim Santa Mônica - Paranaíba -MS</p>
                        </div>
                    </div>
                    <div className="equipe">
                        <p>© Copyright 2019 - Todos os direitos reservados. Desenvolvido por 
                            <a href="https://github.com/antonioducs"  
                            rel="noopener noreferrer" target="_blank"> Antonio</a>, 
                            <a href="https://github.com/Jhiovane"  
                            rel="noopener noreferrer" target="_blank"> Jhiovane</a> e 
                            <a href="https://github.com/lleobatista"  
                            rel="noopener noreferrer" target="_blank"> Leonardo.</a></p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Rodape;