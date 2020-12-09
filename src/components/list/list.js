import {connect} from "react-redux";
import CheckBox from "../checkbox/checkbox";
import './list.scss'
const mapStateToProps = state => ({
    todos: state && state.todos,
    filter : state && state.filter,
    search : state && state.search
})

function List(props) {
    let items = props.todos
    switch(props.filter){
        case 'completed':
            items = props.todos.filter(item=>item.checked);
        break;
        case 'active':
            items = props.todos.filter(item=> !item.checked);
            break;
        default:
            break;
    }
    if(props.search)
        items = items.filter(item => item.value.startsWith(props.search));
    return items ? <ul className="ulClass">
        {items.map((todo, i) => {
            return (<div key={i}><CheckBox size="small" checked={todo.checked}>{todo.value}</CheckBox>
                <hr/>
            </div>)
        })
        }
    </ul> : null
}

export default connect(mapStateToProps)(List)