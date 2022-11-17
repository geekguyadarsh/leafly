import React from "react";
import Logo from "../../assets/Logo@2x.png";
import LogoBlack from "../../assets/Logo-black.png";
import CartIcon from "../../assets/Cart.svg";
import CartIconBlack from "../../assets/Cart-black.svg";
import CartIconGrey from "../../assets/Cart-grey.svg";
import CartIconWhite from "../../assets/cart-white.svg";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";
import searchIcon from "../../assets/Search.svg";
import searchIconGrey from "../../assets/Search-grey.svg";
import searchIconBlack from "../../assets/Search-black.svg";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      opacity: 1,
    };
  } else {
    return {
      opacity: 0.6,
    };
  }
};

const NavBar = ({ homepage = false, history }) => {
  return (
    <nav
      className="navbar navbar-expand-md px-0"
      style={{ position: homepage ? "absolute" : "" }}
    >
      <Link
        to="/"
        className={
          homepage
            ? "nav-link ml-2 navbar-brand text-white"
            : "nav-link ml-2 navbar-brand text-black"
        }
        style={{ fontFamily: "FortuneCookieNF" }}
      >
        <img
          className="brandlogo"
          src={homepage ? Logo : LogoBlack}
          alt="logo"
          height="60px"
        ></img>
        Leafly
      </Link>
      <img
        src={homepage ? searchIcon : searchIconBlack}
        alt="search"
        className="d-block d-md-none ml-auto mr-3"
      />
      <Link className="" to="/cart">
        <img
          src={homepage ? CartIconWhite : CartIconBlack}
          alt="cart"
          className="d-block d-md-none mr-2"
          href="/cart"
        />
      </Link>
      <form action="search" className="d-md-block d-none">
        <img
          src={homepage ? searchIcon : searchIconGrey}
          alt="search"
          className="mr-2"
        />
        <input
          type="text"
          className={
            homepage
              ? "searchbar text-white .d-none .d-md-block .d-lg-block"
              : "searchbar text-dark .d-none .d-md-block .d-lg-block"
          }
          placeholder="Search products"
          style={{ caretColor: homepage ? "white" : "black" }}
        />
      </form>
      <button
        className="navbar-toggler d-flex d-md-none flex-column align-items-end"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div
          style={{
            width: "20px",
            height: "2px",
            background: homepage
              ? "#FFFFFf 0% 0% no-repeat padding-box"
              : "#000 0% 0% no-repeat padding-box",
            borderRadius: "1px",
          }}
        ></div>
        <div
          style={{
            width: "12px",
            height: "2px",
            background: homepage
              ? "#FFFFFf 0% 0% no-repeat padding-box"
              : "#000 0% 0% no-repeat padding-box",
            borderRadius: "1px",
          }}
          className="my-2"
        ></div>
        <div
          style={{
            width: "20px",
            height: "2px",
            background: homepage
              ? "#FFFFFf 0% 0% no-repeat padding-box"
              : "#000 0% 0% no-repeat padding-box",
            borderRadius: "1px",
          }}
        ></div>
      </button>
      <div
        className="collapse navbar-collapse pl-2"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav nav-right ml-auto mr-2">
          <li className="nav-item active">
            <Link
              style={currentTab(history, "/")}
              className={
                homepage ? "nav-link text-white" : "nav-link text-black"
              }
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/products")}
              className={
                homepage ? "nav-link text-white" : "nav-link text-black"
              }
              to="/products"
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/orders")}
              className={
                homepage ? "nav-link text-white" : "nav-link text-black"
              }
              to="/orders"
            >
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <div
              style={{
                cursor: "pointer",
                opacity: "0.6",
              }}
              className={
                homepage ? "nav-link text-white" : "nav-link text-black"
              }
              data-toggle="modal"
              data-target="#signinModal"
            >
              Signin
            </div>
          </li>
          <li className="nav-item d-md-block d-none">
            <Link className="nav-link text-white" to="/cart">
              <img src={homepage ? CartIcon : CartIconGrey} alt="cart" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
