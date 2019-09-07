import React, { Component, Fragment } from "react";
import HeaderControl from "../../components/HeaderControl";
import Tabela from "../../components/Tabela";
import Paginacao from "../../components/Paginacao";

import axios from "axios";
import "./styles.css";


class ControlInsc extends Component {

    state = {
        nome: "",
        cpf: "",
        checkPen: true,
        checkCon: true,
        user: "",
        insc: [],
        inscExi: [],
        qtdPag: 1,
        selPag: 1,
        max: false,
        min: false,
        cont: [],
        inscPesq: []
    };

    async loadInsc() {
        const response = await axios.post(
            "http://caduemspba-back.herokuapp.com/api/insc",
            {
                user: this.props.match.params.user,
                crossDomain: true
            }
        );
        if (response.data !== null) {
            this.setState({ insc: response.data });
            this.setInscExi();
        } else {
            window.location.href = "https://antonioducs.github.io/cad/#/admin";
            alert("Você foi desconectado!");
        }
    }

     clickSair = async () => {
        await axios.get(
            `http://caduemspba-back.herokuapp.com/api/insc/${this.props.match.params.user}`,
            {
                crossDomain: true
            }
        );
        window.location.href = "https://antonioducs.github.io/cad/#/admin";
    }

    cadAdm(){
        window.location.href = `https://antonioducs.github.io/cad/#/cadAdm/${this.props.match.params.user}`;
    }

    setInscExi = async () => {
        var res = [];
        
        (this.state.insc.length && this.state.insc.map(item => {
            if ((this.state.checkCon && item.stateInsc) || (this.state.checkPen && !item.stateInsc)) {
                if(this.state.cpf !== "" && !item.cpf.toUpperCase().indexOf(this.state.cpf.toUpperCase())){
                    res.push(item);
                }else if(this.state.nome !== "" && !item.name.toUpperCase().indexOf(this.state.nome.toUpperCase())){
                    res.push(item);
                }else if(this.state.nome === "" && this.state.cpf === "") {
                    res.push(item);
                }
            }
            return true;
        }))

        this.setState({inscPesq: res});

        var qtd = res.length;
        var pag = parseInt(qtd/10);  
        var i = 0;
        var j = 0;      
        
        if(qtd%10 !== 0.0000)
             pag += 1;

        await this.setState({qtdPag: pag});        

        const exi = [];
        for(i = (this.state.selPag*10)-10; i < (this.state.selPag*10); i++){
            if(res.length > i){
                exi.push(res[i]);
            }
        }
        
        const pages = [];        
        if(this.state.selPag === 1){
            for(i = 1; i <= 3; i++){
                if(i <= this.state.qtdPag)
                    pages.push(i);
            }
            this.setState({min: false});
            if(this.state.qtdPag > 3)
                this.setState({max: true});
        }else if(this.state.selPag === this.state.qtdPag){
            for(i = this.state.qtdPag, j = 1; i >= 1 && j <= 3; i--, j++){
                pages.unshift(i);
            }
            this.setState({max: false});
            if(this.state.qtdPag > 3)
                this.setState({min: true});
        }else{
            if(this.state.selPag > 2)
                this.setState({min: true});
            else{
                this.setState({min: false});
            }
            if(this.state.selPag+1 < this.state.qtdPag)
                this.setState({max: true});
            else{
                this.setState({max: false});
            }

            pages.push(this.state.selPag - 1);
            pages.push(this.state.selPag);
            pages.push(this.state.selPag + 1);
        }
        
        await this.setState({cont: pages});        
        await this.setState({ inscExi: exi });
    }


    componentDidMount() {
        this.loadInsc();
    }


    handlerNome = event => {
        this.setState({selPag: 1});
        this.setState({ nome: event.target.value });
        this.setState({ cpf: "" });
        this.componentDidMount();
    };

    handlerCpf = event => {
        this.setState({selPag: 1});
        this.setState({ cpf: event.target.value });
        this.setState({ nome: "" });
        this.componentDidMount();
    };

    clickCheck(num){
        this.setState({selPag: 1});
        if(num === 1){
            this.setState({checkCon: ! this.state.checkCon});
        }else if(num === 2){
            this.setState({checkPen: ! this.state.checkPen});
        }
        this.componentDidMount();
    }

    tableClick = id => {
        window.location.href = `https://antonioducs.github.io/cad/#/info/${this.props.match.params.user}/${id}`;
    }

    clickPaginacao = async (item) =>{
        await this.setState({selPag: item});
        this.loadInsc();
    }

    clickPaginacaoFunk = async (op) => {
        var v = this.state.selPag;
          
            
        // eslint-disable-next-line default-case
        switch(op){
            case 1: //fim
            v = this.state.qtdPag;
            break;

            case 2: //ini
            v = 1;
            break;

            case 3: //next
            if((v+1) <= this.state.qtdPag)
                v += 1;
            break;

            case 4: //prev
            if((v-1) >= 1)
                v -= 1;
            break;
        }
        await this.setState({selPag: v});
        this.componentDidMount();
    }

    render() {
        return (
            <Fragment>
                <HeaderControl insc={this.state.inscPesq} clickSair={this.clickSair} cadAdm={() => this.cadAdm()}/>
                <div className="filtro">
                    <h1>Filtrar</h1>
                    <div>
                        <input type="checkbox" id="scales" name="scales" onClick={() => this.clickCheck(1)}
                            checked={this.state.checkCon} />
                        <label for="scales">Exibir inscrições com pagamento confirmado</label>
                    </div>

                    <div>
                        <input type="checkbox" id="horns" name="scales" onClick={() => this.clickCheck(2)}
                            checked={this.state.checkPen} />
                        <label for="horns">Exibir inscrições com pagamento pendente</label>
                    </div>
                </div>

                <div className="pesquisar">
                    <h1>Pesquisar</h1>
                    <input type="text" placeholder="Nome" value={this.state.nome} onChange={this.handlerNome} />
                    <input type="text" placeholder="CPF" value={this.state.cpf} onChange={this.handlerCpf} />
                </div>
                <div className="info">
                <p>Exibindo {(this.state.selPag*10 + 1)-10} ~ {this.state.inscExi.length + this.state.selPag*10 - 10} de {this.state.inscPesq.length} inscrições encontradas</p>
                </div>
                <div id="control-insc">
                    <Tabela rowlls={this.state.inscExi} page={this.state.selPag} onClick={this.tableClick}/>
                    <Paginacao sum={this.clickPaginacaoFunk} onClick={this.clickPaginacao} min={this.state.min} max={this.state.max} cont={this.state.cont} selPag={this.state.selPag} />
                </div>
            </Fragment>
        );
    }
}

export default ControlInsc;