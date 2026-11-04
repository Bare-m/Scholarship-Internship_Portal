import "./../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        ScholarPortal
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="#scholarships">Scholarships</a>
        <a href="#internships">Internships</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-actions">
        <button>Login</button>
        <button className="register-btn">Register</button>
      </div>
    </header>
  );
}

export default Header;