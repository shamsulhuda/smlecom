import logo from "../../images/Logo.svg";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <div className="header">
        <nav>
          <div className="logo">
            <img src={logo} alt="siteLogo" srcSet={logo} />
          </div>
        </nav>
      </div>
    </div>
  );
}
