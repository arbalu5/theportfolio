import React from "react";
import { Link } from "react-router-dom";

const Header = ({children}) => {
  return (
    <div>
      <div>
        <h3 className="navigation">
          <Link to="/">Home</Link>
        </h3>
        <h3 className="navigation">
          <Link to="/jokes">Jokes&More</Link>
        </h3>
      </div>
      {children}
    </div>
  );
};

export default Header;
