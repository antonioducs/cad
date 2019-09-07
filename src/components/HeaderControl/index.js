import React, { Component, Fragment } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import img from "../../assets/img/CAD LOGO 2.png";
import log from "../../assets/img/logout.png";
import jsPDF from 'jspdf';
import "./styles.css";

class HeaderControl extends Component {


    clickPdf(props){
        var doc = new jsPDF();
        var cont = 15;
        doc.setFontSize(10);
        (props.insc.length && props.insc.map(item => {
            doc.text(""+item.name+"     "+item.cpf+"   "+item.email+"     "+item.tel
            +"   "+item.register+"     "+item.university+"\n", 5, cont);
            cont+= 10;
            return true;
        }))
        doc.save('inscricoes.pdf');
    }

    gerarCsv(props){
     
        var csv = 'Nome; CPF; Email; Telefone; RGM; Universidade\n';
     
        props.insc.forEach(function(row) {
                csv += row.name;
                csv += ';'+ row.cpf;
                csv += ';'+ row.email;
                csv += ';'+ row.tel;
                csv += ';'+ row.register;
                csv += ';'+ row.university;
                csv += '\n';
        });
      
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'inscricoes.csv';
        hiddenElement.click();
    };

    render() {
        return (
            <Fragment>
                <div id="nav-bar">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand>
                            <div className="img-plogin">
                                <img src={img} alt="logo" />
                            </div></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link onClick={() => this.clickPdf(this.props)}>Download PDF</Nav.Link>
                                <Nav.Link onClick={() => this.gerarCsv(this.props)}>Download CSV </Nav.Link>
                                <Nav.Link onClick={this.props.cadAdm}>Cadastrar Adm</Nav.Link>
                                <Nav.Link onClick={this.props.clickSair}><div className="img-log">
                                    <img src={log} alt="logo" /><p>Sair</p>
                                </div></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Fragment>
        );
    }
}

export default HeaderControl;