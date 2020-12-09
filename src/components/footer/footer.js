import './footer.scss'
import Filter from "../filter/filter";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Separator from "../separator/separator";
import Counter from "../counter/counter";
import {useState} from 'react';
import store from "../../store";
import {startSearch} from "../../actions/list";

function Footer(props) {
    let [style, setStyle] = useState("add");
    function handleClick(action) {
        switch (action) {
            case "add":
                setStyle("add");
                store.dispatch(startSearch(''))
                props.action("add")
                break;
            case "search":
                setStyle("search");
                props.action("search")
                break;
        }

    }

    return (<div className="footer">
        <FontAwesomeIcon className={`active ${style === "add" ? "activeButton" : ""}`} id="font-awesome-plus"
                         icon="plus" onClick={() => handleClick("add")}/>
        <FontAwesomeIcon className={`active ${style === "search" ? "activeButton" : ""}`} id="font-awesome-search"
                         icon="search" onClick={() => handleClick("search")}/>
        <Separator/>
        <Counter></Counter>
        <Filter/>

    </div>)
}

export default Footer