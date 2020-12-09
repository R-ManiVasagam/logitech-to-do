
import MainPage from "./container/to-do/to-do";
import './store';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEllipsisV, faPenSquare, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faSearch, faEllipsisV, faPenSquare)

function App() {
    return (
        <div>
            <MainPage></MainPage>
        </div>
    )
}

export default App;
