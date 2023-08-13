import Link from "next/link";
import { Fragment, useState } from "react";

const Menu = () => (
  <Fragment>
    <div className="logo hover-masks-logo">
      <Link href="/">
        <a>
          <span className="mask-lnk">
            Kush <strong>Rabadia</strong>
          </span>
          <span className="mask-lnk mask-lnk-hover">
            <strong>Welcome</strong>
          </span>
        </a>
      </Link>
    </div>
    {/* top menu */}
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            <li className="menu-item">
              <Link href="/">
                <a>
                  <span class="icon fas fa-home"></span> Home
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/projects">
                <a>
                  <span class="icon fas fa-code"></span> Projects
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/contacts">
                <a>
                  <span class="icon fas fa-phone-alt"></span> Contact
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="images/Resume.pdf" download="Kush's Resume" title="Download Resume">
                <a href="images/Resume.pdf" download="Kush's Resume" title="Download Resume">
                  <span class="fa fa-download"></span> Resume
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};
