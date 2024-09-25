import React from "react";
import './Dashboard.css';

const AdminDashboard = () => {
    return (
        <div className="dashboard">
            <h2>Panel del Administrador</h2>
            <button>Crear Usuario</button>
            <button>Subir Archivos</button>
            <button>Registar Pagos</button>
        </div>
    );
};

export default AdminDashboard;