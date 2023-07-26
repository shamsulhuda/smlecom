import { Link } from "react-router-dom";
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
          <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
