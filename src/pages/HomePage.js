import React from "react";
import './HomePage.css'


const HomePage = ({user}) => {
    return (
        <div className="homepage">
            <h1>Bienvenido al Sistema de Gestion de Pagos</h1>
            {user.role === 'superuser' && (
                <div>
                    <h2>Panel de SuperUsuario</h2>
                    <p>Aca podes gestionar a los administradores.</p>
                </div>
                )}
                {user.role === 'admin' && (
                    <div>
                        <h2>Panel de Administrador</h2>
                        <p>Aca podes agregar usuarios, subir archivos y registar pagos.</p>
                    </div>
                )}
                {user.role === 'user' && (
                    <div>
                        <h2>Panel de Usuario</h2>
                        <p>Aca podes ver tus pagos y descargar los recibos.</p>
                    </div>
                )}
        </div>
    );
};

export default HomePage;