import "./footer.css"
const Footer = (props)=> {

  return (
    <footer>
        <div>
            <span className="textFooter">{props.text}</span>
        </div>  
    </footer>
  );
}

export default Footer;