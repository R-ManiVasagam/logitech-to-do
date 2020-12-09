import './searchBar.scss';
import {useState} from 'react';
import {addItem} from "../../actions/list";
import store from "../../store";

function AddTask() {
    const [searchText, setSearchText] = useState('',)

    function _handleKeyDown(e) {
        if (e.key === 'Enter' && searchText.length) {
            store.dispatch(addItem(searchText))
            setSearchText("");
        }


    }

    return (<input type="text" name="search" placeholder="Add item" value={searchText} onKeyDown={_handleKeyDown}
                   onChange={(e) => {
                       setSearchText(e.currentTarget.value);
                   }}/>
    )

}

export default AddTask;