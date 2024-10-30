import React, { useState } from 'react';
import './styles/App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ToggleBox from './components/ToggleBox';
import useScreenSize from './hooks/useScreenSize';
import moneyImage from './images/money.jpg'; // Asegúrate de que la ruta sea correcta

export function App() {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const isWideScreen = useScreenSize(850);

    const mostrarLogin = () => setIsLoginForm(true);
    const mostrarRegistro = () => setIsLoginForm(false);

    const backgroundStyle = {
        backgroundImage: `url(${moneyImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '100vh', // Asegúrate de que la imagen cubra toda la pantalla
        position: 'absolute', // Asegúrate de que el contenedor esté en posición absoluta
        top: 0, // Asegúrate de que esté en la parte superior
        left: 0, // Asegúrate de que esté alineado a la izquierda
        zIndex: -1 // Asegúrate de que esté detrás del contenido
    };

    const mainStyle = {
        width: '100%',
        padding: '20px',
        margin: 'auto',
        marginTop: '100px',
        position: 'relative', // Posición relativa para que el contenido se superponga a la imagen de fondo
        zIndex: '1', // Asegurarse de que el contenido esté encima de la imagen de fondo
    };

    return (
        <div style={backgroundStyle}>
            <main style={mainStyle} className="main">
                <div className="contenedor__todo">
                    <ToggleBox 
                        isLoginForm={isLoginForm} 
                        isWideScreen={isWideScreen} 
                        mostrarLogin={mostrarLogin} 
                        mostrarRegistro={mostrarRegistro} 
                    />
                    
                    <div className="contenedor__login-register"
                         style={{
                             left: isWideScreen ? (isLoginForm ? '10px' : '410px') : '0px'
                         }}>
                        {isLoginForm ? (
                            <LoginForm />
                        ) : (
                            <RegisterForm />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;