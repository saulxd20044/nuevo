import Logo from "../Logo";

function UserHomeHeader({ userData }) {

    const logOut = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <header>
            <div className="header-container">
                <Logo />
                <nav>
                    <a href="/dashboard">Operaciones</a>
                    <a href="/explore">Explora</a>
                    <a href="#" onClick={logOut}>Cerrar Sesión</a>
                </nav>
            </div>
            {userData ? (
                <p>
                    Bienvenido, <strong>{userData.username} {userData.lastName}</strong>
                </p>
            ) : (
                <p>Cargando...</p>
            )}
        </header>
    )
}

export default UserHomeHeader;