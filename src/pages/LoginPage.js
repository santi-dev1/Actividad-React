import React, {useState} from "react";
import './LoginPage.css';


const LoginPage = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const mockUser = {
            email,
            role: email === 'super@admin.com' ? 'superuser' : email === 'admin@admin.com' ? 'admin' : 'user'
        };
        onLogin(mockUser);
    };

    return (
        <div className="login-page">
            <h1>Iniciar Sesion</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Correo Electronico:</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    );
};

export default LoginPage;