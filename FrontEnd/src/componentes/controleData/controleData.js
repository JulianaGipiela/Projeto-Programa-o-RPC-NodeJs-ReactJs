import "./controleData.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const ControleData = (props)=> {

  return (
    <div >
        <div class="flex-container-lista-title margin-10">
            <div class="iconArrow"><a href="#" onClick={props.onPrevius}><FontAwesomeIcon icon={faArrowCircleLeft} /></a></div>
            <div>
                <h2 class="titleDate">{props.data}</h2> 
            </div>
            <div class="iconArrow"><a href="#" onClick={props.onNext}><FontAwesomeIcon icon={faArrowCircleRight} /></a></div>
        </div>
    </div> 
  );
}

export default ControleData;