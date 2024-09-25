import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/superuser">Dashboard Superusuario</Link></li>
                    <li><Link to="/admin">Dashboard Administrador</Link></li>
                    <li><Link to="/user">Dashboard Usuario</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
