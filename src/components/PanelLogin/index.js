import React, { Component, Fragment } from "react";
import img from "../../assets/img/CAD LOGO 2.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./styles.css";


class PanelLogin extends Component {


  render() {
    return (
      <Fragment>
        <div id="p-login">
          <div className="img-plogin">
            <img src={img} alt="logo" />
          </div>
          <div div="p-login-form">
            <Form onSubmit={this.props.submit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control type="email" placeholder="Digite seu login" onChange={this.props.handlerEmail} />
                <Form.Text className="text-muted">
                  Nós nunca vamos compartilhar seus dados com mais ninguém.
    </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" onChange={this.props.handlerSenha} />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
              </Form.Group>
              <Button variant="primary" type="submit">
                Conectar
          </Button>
            </Form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PanelLogin;