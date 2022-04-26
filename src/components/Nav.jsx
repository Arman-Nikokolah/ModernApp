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
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;

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
    position: relative;
    padding-left: 10rem;
  }
`;

export default Navbar;
