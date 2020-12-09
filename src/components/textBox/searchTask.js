import './searchBar.scss';
import {useState} from 'react';
import store from "../../store";
import {startSearch} from "../../actions/list";

function SearchTask() {
    const [searchText, setSearchText] = useState('')


    return (<input type="text" name="search" placeholder="Search item" value={searchText}
                   onChange={(e) => {
                       setSearchText(e.currentTarget.value);
                       store.dispatch(startSearch(e.currentTarget.value));
                   }}/>
    )

}

export default SearchTask;