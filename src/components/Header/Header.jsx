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
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
