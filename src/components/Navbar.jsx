const Navbar = ({setStudents,Students}) => {
    const create = (e) =>{
        e.preventDefault()
       let id = Math.floor(Math.random()*10000);
       let Name = prompt("Please Enter Students Name!");
       let GPA = prompt("Please Enter Students GPA Score!")
       setStudents([...Students,{id,Name,GPA}])
    }
    return (
        <nav className="navbar">
            <h1>The Students list Assignment</h1>
            <div className="links">
                <a href="/">Home</a>
                <a onClick={create} href="/create" style={{
                    color: 'white',
                    backgroundColor: '#7776BC',
                    borderRadius: '8px'
                }}>New Student</a>
            </div>
        </nav>
    );
}

export default Navbar;