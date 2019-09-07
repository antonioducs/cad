import React, { Component, Fragment } from "react";
import HeaderMain from "../../components/HeaderMain";
import CarouselHome from "../../components/CarouselHome";
import Speakers from "../../components/Speakers";
import Team from "../../components/Team";
import Inscription from "../../components/Inscription";
import Rodape from "../../components/Rodape";

import IconPalestrantes from "../../assets/img/palestrantes_icon.png";


import "./styles.scss";
class Main extends Component {

    render() {
        return (
            <Fragment>
                {<div id="main">
                    <HeaderMain className="header" />
                    <CarouselHome />
                    <section id="portifolio">
                       
                        <h1 className="title-port">Palestrantes</h1>
                        <div className="icon-palestrantes">
                            <img src={IconPalestrantes} alt="..." />
                        </div>
                        <Speakers />
                    </section>
                </div>}
                <Team />
                <Inscription />
                <Rodape />
            </Fragment>
        );
    }
}

export default Main;