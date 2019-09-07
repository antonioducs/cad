import React, { Component, Fragment } from 'react';
import Table from 'react-bootstrap/Table'
import "./styles.css";

class Tabela extends Component {

    render() {
        return (
            <Fragment>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Pagamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.props.rowlls.length && this.props.rowlls.map((item, key) => {
                            return(
                                <tr onClick={() => this.props.onClick(item._id)} key={key}>
                                    <td>{(key+1)+(10*this.props.page)-10}</td>
                                    <td>{item.name}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.email}</td>
                                    <td>{item.tel}</td>
                                    {(!item.stateInsc && (<td className="pendente">Pendente</td>))
                                     || (<td className="confirmado">Confirmado </td>)}
                                </tr>
                            );
                        })) ||    
                        <tr>
                            <td colSpan="6">Nada encontrado!</td>
                        </tr>}
                     
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

export default Tabela;