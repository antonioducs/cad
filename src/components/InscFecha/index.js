import React, { Component, Fragment } from 'react';
import img from "../../assets/img/inscEncerradas.jpg";
import "./styles.css";

class InscFecha extends Component {

    render() {
        return (
            <Fragment>
                <div className="insc-fecha">
                    <div className="img-enc">
                        <img src={img} alt="..." />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default InscFecha;