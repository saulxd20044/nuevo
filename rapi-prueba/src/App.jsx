import React, { useState } from 'react';
import './styles/App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ToggleBox from './components/ToggleBox';
import Logo from './components/Logo';
import useScreenSize from './hooks/useScreenSize';
import moneyImage from './images/money.jpg';

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
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
    };

    const mainStyle = {
        width: '100%',
        padding: '20px',
        margin: 'auto',
        marginTop: '100px',
        position: 'relative',
        zIndex: '1'
    };

    return (
        <div style={backgroundStyle}>
                                <Logo />
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