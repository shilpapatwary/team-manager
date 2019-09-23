import React from "react";
import logo from '../assets/collaboration.jpg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <header>
        <section>
          <h2>Team Manager</h2>
        </section>
      </header>
      <section className="logo">
        <Link to="/"><img src={logo}></img></Link>
      </section>
    </React.Fragment>
  );
};

export default Header;
