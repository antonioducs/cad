import React, { Component, Fragment } from "react";
import ButtonIns from "../../components/ButtonIns";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

class Info extends Component {


    state = {
        info: {},
        show: false
    };

    clickCheckBoxPag = async () => {
        const alt = this.state.info;
        alt.stateInsc = !alt.stateInsc;
        await this.setState({ info: alt });
    }

    clickCheckBoxIns = async () => {
        const alt = this.state.info;
        alt.student = !alt.student;
        await this.setState({ info: alt });
    }


    componentDidMount() {
        this.loadInsc();
    }

    saveAlt = async () => {
        const response = await axios.post(
            "http://caduemspba-back.herokuapp.com/api/saveInsc/",
            {
                user: this.props.match.params.user,
                insc: this.state.info,
                crossDomain: true
            }
        )
        if (response.data.sucess) {
            alert("Alterações foram salvas com sucesso!");
        } else {
            window.location.href = "https://antonioducs.github.io/cad/#/admin";
            alert("Você foi desconectado!");
        }
    }

    loadInsc = async () => {
        const response = await axios.post(
            "http://caduemspba-back.herokuapp.com/api/getInsc/",
            {
                user: this.props.match.params.user,
                insc: this.props.match.params.id,
                crossDomain: true

            }
        );

        if (response.data !== null) {
            this.setState({ info: response.data });
        } else {
            window.location.href = "https://antonioducs.github.io/cad/#/admin";
            alert("Você foi desconectado!");
        }
    }

    cancelarClick = async () => {
        window.location.href = `https://antonioducs.github.io/cad/#/view/${this.props.match.params.user}`;
    }

    excluir = async () => {
        const response = await axios.post(
            "http://caduemspba-back.herokuapp.com/api/deleteInsc/",
            {
                user: this.props.match.params.user,
                insc: this.props.match.params.id,
                crossDomain: true
            }
        );
        if (response.data.sucess) {
            window.location.href = `https://antonioducs.github.io/cad/#/view/${this.props.match.params.user}`;
        } else {
            window.location.href = "https://antonioducs.github.io/cad/#/admin";
            alert("Você foi desconectado!");
        }
    }

    handleInput = async (event) => {
        const alt = this.state.info;
        // eslint-disable-next-line default-case
        switch (event.target.name) {
            case "cpf":
                alt.cpf = event.target.value;
                break;
            case "name":
                alt.name = event.target.value;
                break;
            case "email":
                alt.email = event.target.value;
                break;
            case "university":
                alt.university = event.target.value;
                break;
            case "register":
                alt.register = event.target.value;
                break;
            case "tel":
                alt.tel = event.target.value;
                break;
        }

        await this.setState({ info: alt });
    }

    handleClick = async () => {
        await this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <Fragment>
                {(this.state.insc !== null &&
                    <Fragment>
                        <div id="content-info">
                            <h1>Inscrição</h1>
                            <form>
                                <div id="form-info">
                                    Nome: <input type="text" name="name" value={this.state.info.name} onChange={this.handleInput} />
                                    CPF: <input type="text" name="cpf" value={this.state.info.cpf} onChange={this.handleInput} />
                                    E-mail: <input type="text" name="email" value={this.state.info.email} onChange={this.handleInput} />
                                    Telefone: <input type="text" name="tel" value={this.state.info.tel} onChange={this.handleInput} />

                                    <div className="pagamento">
                                        Estuda em alguma instituição:
                            <input type="checkbox" name="student" onChange={this.clickCheckBoxIns} checked={this.state.info.student} />Sim
                            <input type="checkbox" name="student" onChange={this.clickCheckBoxIns} checked={!this.state.info.student} />Nao
                            </div>

                                    {(this.state.info.student && (
                                        <div className="inst">
                                            Universidade: <input type="text" name="university" value={this.state.info.university} onChange={this.handleInput} />
                                            RGM: <input type="text" name="register" value={this.state.info.register} onChange={this.handleInput} />
                                        </div>
                                    ))}

                                    <div className="pagamento">
                                        Pagamento:
                            <input type="checkbox" name="stateInsc" onChange={this.clickCheckBoxPag} checked={this.state.info.stateInsc} />Confirmado
                            <input type="checkbox" name="stateInsc" onChange={this.clickCheckBoxPag} checked={!this.state.info.stateInsc} />Pendente
                            </div>
                                </div>
                            </form>
                        </div>
                        <div className="div-button">
                            <ButtonIns onClick={this.handleClick}>Excluir Inscrição</ButtonIns>
                            <ButtonIns onClick={this.saveAlt}>Salvar</ButtonIns>
                            <Link to={`/view/${this.props.match.params.user}`}><ButtonIns>Cancela</ButtonIns></Link>
                        </div>
                        <Modal show={this.state.show} onHide={this.handleClick}>
                            <Modal.Header closeButton>
                                <Modal.Title>Excluir</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Tem certeza que deseja excluir definitivamente essa inscrição?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.excluir}>
                                    Sim
          </Button>
                                <Button variant="primary" type="button" onClick={this.handleClick}>
                                    Cancela
          </Button>
                            </Modal.Footer>
                        </Modal>
                    </Fragment>
                ) || <h1>Falha ao exibir dados!</h1>}
            </Fragment>
        );
    }
}

/*

*/
export default Info;