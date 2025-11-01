import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-top">
        <div className="col-1">
          <div className="logo-stack">
            <img className="logo svce-logo" src="www.svce.ac.in/images/svce-logo.png" alt="SVCE Logo" />
            <img className="logo aicte-logo" id="aicte-logo-mb" src="www.svce.ac.in/images/AICTE-logo.png" alt="AICTE Logo" />
          </div>
        </div>

        <div className="col-2">
          <p className="title">SRI VENKATESWARA COLLEGE OF ENGINEERING</p>
          <p>AN AUTONOMOUS INSTITUTION - AFFILIATED TO ANNA UNIVERSITY</p>
          <p>PENNALUR, SRIPERUMBUDUR TK - 602 117</p>
        </div>

        <div className="col-3">
          <img className="logo aicte-logo" id="aicte-logo-lg" src="www.svce.ac.in/images/AICTE-logo.png" alt="AICTE Logo" />
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

      <div className="header-main">
        <nav>
          <ul id="navLinks" className={menuOpen ? 'show' : ''}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#video">CALL FOR PAPER</a></li>
            <li><a href="#author">AUTHOR GUIDELINES</a></li>
            <li><a href="#jp">JOURNAL PUBLICATION <span className="new">NEW</span></a></li>
            <li><a href="#program">COMMITTEE</a></li>
            <li><a href="#venue">ABOUT US</a></li>
            <li><a href="#contact_1">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;