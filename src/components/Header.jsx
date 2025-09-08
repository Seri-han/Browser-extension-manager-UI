export default function Header({ darkMode, setDarkMode }) {
    return (
        <header className="header">
            <img className="header__logo" src="/src/assets/images/logo.svg"/>
            <span
            className='mode'
            onClick={() => setDarkMode((prev) => !prev)}
            style={{ cursor: 'pointer'}}
            >
                <img
                className='mode_img'
                src={darkMode ? '../assets/images/icon-moon.svg' : '../assets/images/icon-sun.svg'}
                />
                </span>
        </header>
    );
}