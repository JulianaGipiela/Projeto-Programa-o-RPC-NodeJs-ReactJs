import logo from "../../image/logo_web.png"
import "./cabecalho.css"
const Cabecalho = (props)=> {


  return (
    <header>
        <div>
            <a href="https://redeglobo.globo.com/rpc/" target="_blank"><img src={logo} className="img-logo"/></a>
        </div>  
    </header>
  );
}

export default Cabecalho;