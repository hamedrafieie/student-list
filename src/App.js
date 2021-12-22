import {useState} from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
    const [Students, setStudents] = useState([
        {Name: 'mammad mammadian',GPA:'4.5',id:'1'},
        {Name: 'sina ahmadi',GPA:'3.5',id:'2'},
        {Name: 'iman salehi',GPA:'2',id:'3'},
        {Name: 'karim karimi',GPA:'4.1',id:'4'},
    ])
    return (
        <div className="App">
            <Navbar setStudents={setStudents} Students={Students}/>
            <div className="content">
                <Home setStudents={setStudents} Students={Students} />
            </div>
        </div>
    );
}

export default App;
