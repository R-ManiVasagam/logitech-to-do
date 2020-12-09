import Header from "../../components/header/header";
import AddTask from "../../components/textBox/addTask";
import SearchTask from "../../components/textBox/searchTask";
import List from "../../components/list/list";
import Footer from "../../components/footer/footer";
import {useState} from 'react';
import '../card/card.scss'

function Card(props) {
    let [currentAction, setCurrentAction] = useState("add");
    return (<div>
            <div className="divStyle">
                <Header value="TO DO"/>
                {currentAction === "add" ? <AddTask/> : <SearchTask/>}
                <List/>
            </div>
            <Footer action={setCurrentAction}/>
        </div>
    )
}

export default Card