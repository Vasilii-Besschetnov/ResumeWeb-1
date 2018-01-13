import React from "react";
import { headerWrapper, header, headerPerson, headerInfo} from "./_header.scss";
import MaxWidth from "components/MaxWidth/MaxWidth.jsx";
import Person from "components/Person/Person.jsx";
import PersonalInfo from "components/PersonalInfo/PersonalInfo.jsx";

const Header = () => {
    return (
        <div className={headerWrapper}>
            <MaxWidth className={header}>            
                <div className={headerPerson}>
                    <Person />
                </div>
                <div className={headerInfo}>
                    <PersonalInfo />
                </div>            
            </MaxWidth>
        </div>
    );
};

export default Header;