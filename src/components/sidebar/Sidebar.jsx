import './sidebar.css'

function Sidebar() {
    let date = new Date().getFullYear();
    function open() {
        document.getElementById('aside').classList.toggle("open-nav")
        
    }
    return (
        <aside className="aside" id='aside'>
            <section className='open' id='open' onClick={() => { open() }}>
                <i className="fa-solid fa-bars"></i>
            </section>

            <a href="#home" className="nav-logo">
                R<span>.</span>
            </a>

            <nav className="nav">
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#services" className="nav-link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>


                        <li className="nav-item">
                            <a href="#work" className="nav-link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>


                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav-footer">
                <span className="copyright">
                    &copy; {date}
                </span>
            </div>
        </aside>
    )
}

export default Sidebar