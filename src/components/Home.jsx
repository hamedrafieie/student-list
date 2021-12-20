import { useState } from "react";
import StudentsList from "./StdLits";

const Home = () => {
    const [Students, setStudents] = useState([
        {Name: 'mammad mammadian',GPA:'4.5',id:'1'},
        {Name: 'sina ahmadi',GPA:'3.5',id:'2'},
        {Name: 'iman salehi',GPA:'2',id:'3'},
        {Name: 'karim karimi',GPA:'4.1',id:'4'},
    ])
const handleDelete = (id) => {
     const newStudents = Students.filter(Students => Students.id !== id);
         setStudents(newStudents);
    }
    return (
        <div className="home">
            <StudentsList Students={Students.filter((Students) => Students.GPA > 4)} title="Top Students" handleDelete={handleDelete} />
            <StudentsList Students={Students.filter((Students) => Students.GPA < 4)} title="other Students" handleDelete={handleDelete}  />

        </div>
    );
}

export default Home;
