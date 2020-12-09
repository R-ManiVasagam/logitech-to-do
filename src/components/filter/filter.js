import './options.scss'
import store from "../../store";
import {displayItems} from '../../actions/list';
import {connect} from 'react-redux';
import {useState} from 'react';

const mapStateToProps = state => ({
    todos: state && state.todos || []
})

function Filter(props) {
    console.log(props)
    let [active, setActive] = useState("all")
    function onClick(items){
        store.dispatch(displayItems(items))
        setActive(items)
    }
    return (<div className="mainClass">
        <span className={`optionClass ${active ==="all"? 'activeClass' : ''}`}  onClick={()=>onClick('all')}>All</span>
        <span className={`optionClass ${active ==="active"? 'activeClass' : ''}`} onClick={()=>onClick('active')}>Active</span>
        <span className={`optionClass ${active ==="completed"? 'activeClass' : ''}`}  onClick={()=>onClick('completed')}>Completed</span>
    </div>)
}

export default connect(mapStateToProps)(Filter);