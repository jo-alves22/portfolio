import { useState } from 'react';
import { Link } from 'react-router-dom';
import jonasLogo from '../../assets/Logo.svg'
import './Navbar.css'

function Navbar() {
    const [clicked, setClicked] = useState(false)

    return (
        <nav className="navbar">
            <div>
                <a href="#topo">
                    <img src={jonasLogo} className="logojonas" alt="Jonas logo" />
                </a>
            </div>
            <div>
                <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                    <li><a href="#topo">Sobre</a></li>
                    <li><a href="#skills">Experiência</a></li>
                    <li><a href="#project">Projetos</a></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
            <div id="mobile" onClick={() => setClicked(prev => !prev)}>
                <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    )
}

export default Navbar
