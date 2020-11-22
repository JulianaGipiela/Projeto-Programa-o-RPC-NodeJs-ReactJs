import "./destaque.css"
const Destaque = (props)=> {

  return (
    <div>
    <h1> PROGRAMAÇÃO </h1>
    
    <div class="flex-container-now">     
        <div><img src={props.imagem} className="img-now" /></div>
        <div class="marginLive">
            <h2 className="titleNow-content-hr">Passando Agora</h2>   
            <h2 className="titleNow-content"> {props.titulo}</h2>
        </div>  
    </div> 
    </div> 
  );
}

export default Destaque;