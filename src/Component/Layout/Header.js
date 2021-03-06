import React, { Fragment } from "react";
import headerbg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Deleciouse Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerbg} alt="A Table full of delicious" />
      </div>
    </Fragment>
  );
};

export default Header;
