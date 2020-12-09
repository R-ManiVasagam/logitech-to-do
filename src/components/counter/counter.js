import {connect} from "react-redux";

const mapStateToProps = state => ({
    todos: state && state.todos || []
})

function Counter(props) {
    return (<span id="counter">{props.todos.filter(val => !val.checked).length} items left</span>)
}

export default connect(mapStateToProps)(Counter)
