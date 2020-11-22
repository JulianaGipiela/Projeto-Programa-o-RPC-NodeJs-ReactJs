import "./programacao.css"
import Cabecalho from "../../componentes/cabecalho/cabecalho" 
import Footer from "../../componentes/footer/footer"
import Destaque from "../../componentes/destaque/destaque"
import ControleData from "../../componentes/controleData/controleData"
import moment from 'moment'
import Container from "../../componentes/container/container"
import ItemLista from "../../componentes/itemLista/itemLista"
import Load from "../../componentes/load/load"
import axios from 'axios'
import React, { useState, useEffect } from 'react';

const Programacao = (props)=> {
    const [conteudo, setConteudo] = useState(null)
    const [loading, setLoading] = useState(false)
    const avancar = ()=> {
        const data = conteudo.tomorrow
        carregarDados(data)
    }

    const voltar = ()=> {
        const data = conteudo.lastDay
        carregarDados(data)
    }

    const carregarDados = async(data)=>{
        setLoading(true)
        const datatoAPI = await axios.get(`http://localhost:8081/api/${data}`)
        setConteudo(datatoAPI.data)
        console.log(datatoAPI.data)
        setLoading(false)
    }
    
    useEffect(() => {
       const data = moment().format("YYYY-MM-DD")
        carregarDados(data)

      }, []);

   const getItens = ()=>{
    const arrayLista = []
    if(conteudo != null) {
        for(const entry of conteudo.programation) {
            arrayLista.push(<ItemLista titulo={entry.tituloPrograma} logo={entry.logoPrograma} data={entry.humanStartTime+" às "+entry.humanEndTime} noAr={entry.noAr ? `<br /> No Ar`:""} descricao={entry.descricao} sinopse={entry.sinopse == null ? "Sem Sinopse":entry.sinopse} idade={entry.idade} sexo={entry.sexo ? "Contém":"Não contém"} drogas={entry.drogas ? "Contém":"Não contém"} violencia={entry.violencia ? "Contém":"Não contém"} imagemPrograma={entry.imgPrograma} />)
        }
    }
    return arrayLista
   } 

  return (
    <>
        {loading ? <Load />:null}
        <Cabecalho /> 
        <Container>
            <Destaque imagem={conteudo != null ? conteudo.toNow.imgPrograma : null} titulo={conteudo != null ? conteudo.toNow.tituloPrograma : null} />
            <ControleData data={conteudo != null ? conteudo.dateNow : null} onNext={avancar} onPrevius={voltar} />
            
            {getItens()}


        </Container>
        <Footer text="Desenvolvido por Juliana Cecília Gipiela Corrêa Dias"/>
    </>
  );
}

export default Programacao;
