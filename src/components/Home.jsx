import { useState } from "react";
import StudentsList from "./StdLits";

const Home = ({setStudents,Students}) => {

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
