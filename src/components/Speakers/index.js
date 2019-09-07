import React from 'react';
import './styles.scss';

const Speakers = () =>{
  return(
    
    <div className="wrapper" id="speakers">
        
        <div className="card">
            <input type="checkbox" id="card1" className="more" aria-hidden="true"/>
            <div className="content">
                <div className="front wall1" >
                    <div className="inner">
                        <h2>João Paulo Lacerda</h2>
                        <h5>23/09 - 8h00</h5>
                        <p></p>
                        <h6>Tema: Profissionalização da Administração Pública: desafios e perspectivas</h6>
                        <label for="card1" className="button" aria-hidden="true">
                            Currículo
                        </label>
                    </div>
                </div>

                <div className="back">
                    <div className="inner">
                        <div className="description">
                            <p>✓ João Paulo Lacerda é palestrante, consultor jurídico e parecerista na área do Direito Administrativo.</p>
                            <p>✓ É especialista em Direito Administrativo pela Pontifícia Universidade Católica de São Paulo –
                            PUC/SP.</p>
                            <p>✓ É especialista em Direito Público.</p>
                            <p>✓ É especialista em Direito Municipal.</p>
                            <p>✓ É pós-graduado em Direito Eleitoral.</p>
                            <p>✓ É presidente do Instituto de Direito Administrativo de Mato Grosso do Sul - IDAMS.</p>
                            <p>✓ É presidente da Comissão de Direito Administrativo da Ordem dos Advogados do Brasil - Seccional
                            Mato Grosso do Sul.</p>
                            <p>✓ É secretário-geral da Comissão Especial de Direito Administrativo do Conselho Federal da Ordem
                            dos Advogados do Brasil.</p>
                            <p>✓ É membro da Comissão do Advogado Publicista da Ordem dos Advogados do Brasil - Seccional
                            Mato Grosso do Sul.</p>
                            <p>✓ É ex-membro consultor da Comissão Especial de Direito Administrativo do Conselho Federal da
                            Ordem dos Advogados do Brasil.</p>
                            <p>✓ É ex-vice-presidente da Comissão do Advogado Publicista da Ordem dos Advogados do Brasil -
                            Seccional Mato Grosso do Sul.</p>
                        </div>
                        <label for="card1" className="button return" aria-hidden="true">
                            <p>Voltar</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>




        <div className="card">
            <input type="checkbox" id="card3" className="more"/>
            <div className="content">
                <div className="front wall2" >
                    <div className="inner">
                        <h2>Sabrina Medina</h2>
                        <h5>25/09 - 19h30min</h5>
                        <p></p>
                        <h6>Tema: A dignidade da pessoa humana e a mulher no cárcere brasileiro</h6>
                        <label for="card3" className="button" aria-hidden="true">
                            Currículo
                        </label>
                    </div>
                </div>

                <div className="back">
                    <div className="inner">
                        
                        <div className="description">
                            <p>✓ Bacharel em direito pela Universidade Estadual de Maringá. </p>
                            <p>✓ Especialista em Direito Aplicado pela Escola da Magistratura do Paraná.</p>
                            <p>✓ Mestranda do Programa de Pós-Graduação em Ciências Jurídicas. </p>
                            <p>✓ Mestrado com ênfase em Direitos da Personalidade no Centro Universitário UniCesumar, sua dissertação versará sobre a vulnerabilidade da mulheres em situação de cárcere.</p>
                            <p>✓ Professora de Pós-Graduação em Psicologia Jurídica e Ciências Criminais da UniFatecie.</p>
                            <p>✓  Atualmente atua como advogada na cidade de Maringá-Pr desenvolvendo suas atividades nas áreas do Direito Penal, Civil e Previdenciário.</p>
                        </div>
                        
                        <label for="card3" className="button return wallback1" aria-hidden="true">
                            <p>Voltar</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Speakers;