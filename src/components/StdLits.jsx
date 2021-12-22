const StudentsList = ({ Students, title,handleDelete}) => {
    return (
        <div className="Student-list">
            <h2>{ title }</h2>
            {Students.map(Student => (
                <div className="Student-preview" key={Student.id} >
                    <h2>{ Student.Name }</h2>
                    <p>GPA Score : { Student.GPA }</p>
                    <button onClick={ () => handleDelete (Student.id)}> Delete </button>
                </div>
            ))}
        </div>
    );
}

export default StudentsList;