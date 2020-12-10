import './checkbox.scss';
import {markItem, unmarkItem} from "../../actions/list";
import store from '../../store';

function CheckBox(props) {
    let disabled=props.disabled;
    let child = props.children
    let sizeClass = props.size;

    function handleChange(e) {
        let flag = e.target.checked;
        if (flag)
            store.dispatch(markItem(props.id))
        else
            store.dispatch(unmarkItem(props.id))
    }

    return (<div className="container">
        <span className={disabled?"":"roundEffect"}>
        <input className={sizeClass} type="checkbox" disabled={disabled} checked={disabled||props.checked} onChange={handleChange}/></span>
        {!props.checked ? <label key={props.id}>{child}</label> : <s><label key={props.id}>{child}</label></s>}
        <span className="checkMark"></span>
    </div>)
}

export default CheckBox;