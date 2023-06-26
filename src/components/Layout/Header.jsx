import { Fragment } from "react";
import "./header.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
