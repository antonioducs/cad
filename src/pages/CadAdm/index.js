import React, { Component, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import ButtonIns from "../../components/ButtonIns";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

class CadAdm extends Component {

  state = {
    email: "",
    senha: ""
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleSenha = event => {
    this.setState({ senha: event.target.value });
  };

  cadastrar = async () => {
    const response = await axios.post(
      "http://caduemspba-back.herokuapp.com/api/cadAdm/",
      {
        user: this.props.match.params.user,
        email: this.state.email,
        senha: this.state.senha,
        crossDomain: true
      }
    );
    if (response.data.sucess === 1) {
      window.location.href = `https://antonioducs.github.io/cad/#/view/${this.props.match.params.user}`;
      alert("Cadastrado com sucesso!");
    } else if (response.data.sucess === 0) {
      alert("Já existe usuário cadastrado com o email informado!");
    } else {
      window.location.href = "https://antonioducs.github.io/cad/#/admin";
      alert("Você foi desconectado!");
    }
  }


  render() {
    return (
      <Fragment>
        <div className="cadadm-body">
          <h1>Cadastrar novo administrador</h1>
          <div className="p-cad-admin">
            <Form onSubmit={this.cadastrar}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu E-mail" onChange={this.handleEmail} />
                <Form.Text className="text-muted">
                  Nós nunca vamos compartilhar seu e-mail com mais ninguém.
    </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" onChange={this.handleSenha} />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
              </Form.Group>
              <div className="div-button">
                <ButtonIns type="submit" onSubmit={this.cadastrar}>Cadastrar</ButtonIns>
                <Link to={`/view/${this.props.match.params.user}`}><ButtonIns>Cancela</ButtonIns></Link>
              </div>
            </Form>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default CadAdm;