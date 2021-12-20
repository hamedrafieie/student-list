const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Students list Assignment</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#7776BC',
                    borderRadius: '8px'
                }}>New Student</a>
            </div>
        </nav>
    );
}

export default Navbar;