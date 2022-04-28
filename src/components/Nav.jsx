import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <StyledNav>
      <h1 className="logo">
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. AboutPage</Link>
        </li>
        <li>
          <Link to="/work">2. OurWork</Link>
        </li>{" "}
        <li>
          <Link to="/contactus">3. ContactUs</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  position: sticky;
  background-color: #353535;
  opacity: 0.8;
  top: 0;
  z-index: 10;
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
  .logo {
    font-size: 1.2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  li {
    padding-left: 8rem;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    .logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Navbar;
