import React from "react";
import ReactDOM from "react-dom";
import Person from "components/Person/Person.jsx";
import PersonalInfo from "components/PersonalInfo/PersonalInfo.jsx";

const root = document.getElementById("Root");

ReactDOM.render(<div>
                <Person />
                <PersonalInfo />
                </div>, root);