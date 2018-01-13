import React from "react";
import "./_header.scss";
import Person from "components/Person/Person.jsx";
import PersonalInfo from "components/PersonalInfo/PersonalInfo.jsx";

const Header = () => {
    return (
        <div className="header">
            <div className="header-person">
                <Person />
            </div>
            <div className="header-info">
                <PersonalInfo />
            </div>
        </div>
    );
};

export default Header;