/* -------------------------------------------------------------------------------------------------
The Header component which is currently only renders the company logo
------------------------------------------------------------------------------------------------- */


import React from "react";
import "../../Webcomponents/Blabla-search/blabla-search";
import "../../Webcomponents/Blabla-overlay/blabla-overlay";

const Header = () => {
  return (
    <React.Fragment>
      <div className={`ui grid`}>
        <div className="three wide computer nine wide tablet six wide mobile column">
          <div className="logo">
            <img src={"logo.svg"} alt="blablacar logo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
