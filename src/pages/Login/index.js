import React, { Component, Fragment } from "react";
import PanelLogin from "../../components/PanelLogin";
import axios from 'axios';
import "./styles.css";


class Login extends Component {

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

  acess = async () => {  
    const response = await axios.post(
      "http://caduemspba-back.herokuapp.com/api/acess",
      {
        email: this.state.email,
        senha: this.state.senha,
        crossDomain: true
      }
    );
    if (response.data.acess !== 0) {
        window.location.href = `https://antonioducs.github.io/cad/#/view/${response.data.acess}`;
    }
    else {
      alert("Usuário e/ou senha incorreto(s)");
    }
  }

  render() {
    return (
      <Fragment>
        <div id="body-p-login">
          <PanelLogin submit={this.acess}
            handlerEmail={this.handleEmail} handlerSenha={this.handleSenha} />
        </div>

      </Fragment>
    );
  }
}

export default Login;