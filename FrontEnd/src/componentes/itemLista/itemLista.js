import "./itemLista.css"
import React, { useState } from 'react';

const ItemLista = (props)=> {
    const [status, setStatus] = useState(false)

    const changedStatus= ()=>{
        setStatus(!status)
    }


  return (
<>
<button type="button" className="collapsible" onClick={changedStatus}>
    <div className="flex-container-lista">                
  <div className="margin-10 time"><div className="textHour">{props.data}<span className="textRed">{props.noAr}</span></div></div>
        <div className="flex-group-time">
            <div className="margin-10"><img src={props.logo} className="img-logo-prog" /></div>
            <div className="margin-10"><div className="textTitle">{props.titulo}</div></div>
        </div>    
    </div>  
</button>

<div className={status == true ? null : 'content'}>
    <div className="flex-container-conteudo">               
        <div className="width40"><img src={props.imagemPrograma} className="img-content" /></div>
        <div className="width60">
            <p className="configP">                       
                <span className="textTitleContent up">{props.titulo}</span>
            </p>

            <p>                       
                <span className="textContent">{props.descricao}</span>
            </p>
            <p>
                <span className="textContent">{props.sinopse}</span>
            </p>
            <p className="textclassNameification">
                <span className="textTitleContent"> Idade: </span>
                <span className="textContent">{props.idade}</span>
                <span className="textTitleContent"> Sexo: </span>
                <span className="textContent">{props.sexo}</span>
                <span className="textTitleContent"> Drogas: </span>
                <span className="textContent">{props.drogas}</span>
                <span className="textTitleContent"> Violência: </span>
                <span className="textContent"> {props.violencia}</span>
            </p>
        
        </div>
    </div>
</div>
</>
  );
}

export default ItemLista;