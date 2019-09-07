import React, {Component, Fragment} from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, Button,Fade} from 'reactstrap';
import './styles.css';
import InputMask from 'react-input-mask';
import InscFeha from "../../components/InscFecha";
import axios from 'axios'

class Inscription extends Component {
    
   isNumber(n) {
    var numsStr = n.replace(/[^0-9]/g,'');
    if(numsStr.length > 0)
        return true;
    else
        return false;
    }
    
    state = {
        msgCPF:'CPF inválido',
        qtdInscConfirm: 0,
        insEnc:false,
        student:false,
        option:false,
        vOption:false,
        vName:false,
        vEmail:false,
        cpfVal:false,
        cpfInv:false,
        vTel:false,
        vUni:false,
        vReg:false,
        name:'',
        email:'',
        university:'',
        register:'',
        cpf:'',
        tel:'',
        insc:[],
        
    };
    validaCPF(cpf) 
    {
        var numsStr = cpf.replace(/[^0-9]/g,'');
        return this.calcValidaCPF(numsStr);
    }
    calcValidaCPF(cpf)
    {
        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (cpf.length < 11)
            return false;
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) !== cpf.charAt(i + 1))
                    {
                    digitos_iguais = 0;
                    break;
                    }
        if (!digitos_iguais)
            {
            numeros = cpf.substring(0,9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                    soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                    return false;
            numeros = cpf.substring(0,10);
            soma = 0;
            for (i = 11; i > 1; i--)
                    soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                    return false;
            return true;
            }
        else{
            return false;
        }
            
    }
    handleOptionChange = async (event) => {
        if(event.target.value ===  'true')
            await this.setState ({student: true,option:true,vOption:false});
        else
            await this.setState ({student: false,option:true,vOption:false});
    }
    handleInputChange = async (event) => {
        const target = event.target;
        await this.setState({
            [event.target.name]: event.target.value
        })
        if(target.name === 'name')  
        {
            if(this.isNumber(this.state.name))
                await this.setState ({vName: true})
            else
                await this.setState ({vName: false})
        }else if(target.name === 'cpf')
        {
            await this.setState({msgCPF: 'CPF inválido'});
            if(this.validaCPF(this.state.cpf))
            {
                await this.setState ({cpfVal: true});
                await this.setState ({cpfInv: false});
            }    
            else
            {
                await this.setState ({cpfVal: false});
                await this.setState ({cpfInv: true});
            } 
        }

        
    }
    handlevNameOnBlur = async (event) => {

        if(this.state.name.length < 3 || this.isNumber(this.state.name))
            await this.setState ({vName: true})
        else
            await this.setState ({vName: false})
    }
    handlevEmailOnBlur = async (event) => {

        if(this.state.email.length < 5)
            await this.setState ({vEmail: true});
        else
            await this.setState ({vEmail: false});
    }
    handlevTelOnBlur = async (event) => {
        const vTelStr = this.state.tel.replace(/[^0-9]/g,'');
        if(vTelStr.length < 10)
            await this.setState({vTel: true})
        else 
            await this.setState({vTel: false});
    }
  
    handleUniversityOnBlur = async (event) => {
        if(this.state.university.length < 1)
            await this.setState({vUni: true})
        else 
            await this.setState({vUni: false})
    }
    handleRegisterOnBlur = async (event) => {
        if(this.state.register.length < 1)
            await this.setState({vReg: true})
        else 
            await this.setState({vReg: false})
    }
     focusvEmail = async (event) => {
         await this.setState ({vEmail: false});
    }
     onSubmit = async (event) => {
        if(this.state.name !== '' && this.state.email !== '' && 
        this.state.tel !== '' && this.state.cpf !== '' && this.state.option)
        {
            if(this.state.student)
            {
                if(this.state.university === '')
                    await this.setState({vUni: true});
                if(this.state.register === '')
                    await this.setState({vReg: true});
            }
            if(!this.state.vName && !this.state.vEmail && !this.state.vTel &&
            this.state.cpfVal && !this.state.vUni && !this.state.vReg)
            {
                
                const response = await axios.post("https://caduemspba-back.herokuapp.com/api/creatInsc/", {
                    name: this.state.name,
                    email: this.state.email,
                    student: this.state.student,
                    university: this.state.university,
                    register: this.state.register,
                    cpf: this.state.cpf,
                    tel: this.state.tel,    
                    crossDomain: true
                      })
                if(response.data.ret)
                    {
                        
                        await this.setState({msgCPF: 'CPF inválido',cpfVal: true,cpfInv:false,cad:true});
                        this.limparCampos();
                    }
                    
                else
                {
                    await this.setState({msgCPF: 'CPF já cadastrado',cpfVal: false,cpfInv:true});
                    
                }
                    
            }
        }else
        {
            if(this.state.name === '')
            await this.setState({vName: true});
            if(this.state.email === '')
            await this.setState({vEmail: true});
            if(this.state.cpf === '')
            await this.setState({cpfVal: false,cpfInv:true});
            if(this.state.tel === '')
            await this.setState({vTel: true});
            if(!this.state.option)
            await this.setState({vOption: true});
            
        }
    }
    async limparCampos(){
        await this.setState({name:'',email:'',university:'',register:'',cpf:'',tel:'',cpfInv:false,
    cpfVal:false});
    }
    componentDidMount() {
        this.loadInfo();
      }
      loadInfo = async () => {
        const response = await axios.get(
            "https://caduemspba-back.herokuapp.com/api/qtdInsc/",
        {
          crossDomain: true
        });
        await this.setState({
          qtdInscConfirm: response.data.qtd
        });
        var insc = false;
        if(this.state.qtdInscConfirm <= 200)
            insc = true;
        await this.setState({
            insEnc: insc
            });
      };

    render() 
    {
        return(
            <Fragment>
            {(!this.state.insEnc &&  <InscFeha />) || <div class="ext-insc">
                <div class="inscription" id="inscription">
                <h2>INSCREVA-SE</h2>
                <div class="form-inscription">
                    
                    <Form onSubmit={this.onSubmit} action='' method="get">
                        <FormGroup >
                                <Label class="label-input">Nome Completo</Label>                                
                                <Input invalid={this.state.vName} onChange={this.handleInputChange}
                                 type='text' onBlur={this.handlevNameOnBlur} name="name"
                                 value={this.state.name}></Input>
                                <FormFeedback invalid={this.state.vName} >Nome Inválido</FormFeedback>                                    
                        </FormGroup>
                        
                        <FormGroup>
                            <Label  class="label-input">Email</Label>
                            <Input invalid={this.state.vEmail} onChange={this.handleInputChange}
                            onFocus={this.focusvEmail} type='email'  value={this.state.email}
                             onBlur={this.handlevEmailOnBlur} name="email"></Input>
                            <FormFeedback invalid={this.state.vEmail} >Email Inválido</FormFeedback>
                        </FormGroup>
                        <FormGroup >
                        <Label  id="check-label" class="label-input">Estuda em alguma instituição ?</Label>
                        
                        {' '}
                            <FormGroup check inline>
                                <Label  class="label-input">
                                    <Input type="radio" name="option"  value={true}
                                     onChange={this.handleOptionChange} invalid={this.state.vOption}
                                     />{' '}
                                    Sim
                                   
                                </Label >
                                </FormGroup>
                                <FormGroup check inline>
                                <Label  class="label-input">
                                    <Input type="radio" name="option" value={false} 
                                    onChange={this.handleOptionChange}
                                    invalid={this.state.vOption}/>{' '}
                                    Não
                                    
                                </Label>
                                
                            </FormGroup>
                            <Input hidden  invalid={this.state.vOption}></Input>
                            <FormFeedback inline invalid>Selecione uma opção</FormFeedback>
                            {(!this.state.student) || (
                               <Fade in={this.state.student} >
                               <div id="student">
                                    <FormGroup >
                                        <Label  class="label-input">Qual ?</Label>
                                        <Input onBlur={this.handleUniversityOnBlur} name="university"
                                        onChange={this.handleInputChange} invalid={this.state.vUni}
                                        value={this.state.university}/>
                                        <FormFeedback invalid>Insira uma instituição</FormFeedback>
                                    </FormGroup>
                                    <FormGroup >
                                        <Label class="label-input">Registro Academico</Label>
                                        <Input onBlur={this.handleRegisterOnBlur} name='register' 
                                        type='text' onChange={this.handleInputChange} 
                                        invalid={this.state.vReg} value={this.state.register}/>
                                         <FormFeedback invalid>Insira um registro academico</FormFeedback>
                                    </FormGroup> 
                                </div>
                                </Fade>
                            )}
                           
                            <FormGroup>
                                <Label  class="label-input" >CPF</Label>
                                <Input  mask="999.999.999-99" maskChar=" " tag={InputMask}
                                 onChange={this.handleInputChange} valid={this.state.cpfVal}
                                 invalid={this.state.cpfInv} onBlur={this.handleCPFOnBlur}
                                 name='cpf' value={this.state.cpf}></Input>
                                <FormFeedback valid >CPF Válido</FormFeedback>
                                <FormFeedback invalid>{this.state.msgCPF}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label  className="label-input">Telefone</Label>
                                <Input onBlur={this.handlevTelOnBlur} type="tel" mask="(99) 99999-9999"
                                 maskChar=" " tag={InputMask} invalid={this.state.vTel} name='tel'
                                 onChange={this.handleInputChange} value={this.state.tel}></Input>
                                <FormFeedback invalid>Numero inválido</FormFeedback>
                            </FormGroup>
                        </FormGroup>
                        <div className="btn-space">
                            <Button  id="btn"size="lg" onClick={this.onSubmit}>Enviar</Button>
                            
                        </div>
                    </Form>
                </div>
                
            </div>
            </div>
            }</Fragment>
            );
    }
    
    
}
export default Inscription;