import logo from "../assets/images/logo.svg";
import dark from "../assets/images/icon-sun.svg";
import light from "../assets/images/icon-moon.svg";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="head_wrapper">
      <img className="logo" src={logo} alt="Logo" />
      <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
        <img
          src={darkMode ? dark : light}
          alt={darkMode ? "Dark mode" : "Light mode"}
          className="theme-icon"
        />
      </button>
    </header>
  );
}
