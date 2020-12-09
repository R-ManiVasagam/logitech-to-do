import {createStore} from 'redux';
import List from "../reducers/list";

const store = createStore(List);

export default store