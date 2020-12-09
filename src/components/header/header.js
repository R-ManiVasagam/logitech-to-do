import './header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Header(props) {
    let value = props.value || "Header";
    return (<h1 className="header"><FontAwesomeIcon icon="pen-square"/> {value}</h1>)
}

export default Header;