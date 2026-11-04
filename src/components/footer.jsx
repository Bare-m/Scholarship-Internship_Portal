import "./../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <h3>ScholarPortal</h3>
        <p>
          Find opportunities and achieve your
          educational goals.
        </p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="#scholarships">Scholarships</a>
        <a href="#internships">Internships</a>
        <a href="#about">About Us</a>
      </div>

      <div>
        <h4>Contact</h4>
        <p>Email: info@scholarportal.com</p>
      </div>

      <p>© 2026 ScholarPortal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;