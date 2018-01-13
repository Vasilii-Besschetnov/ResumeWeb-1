import React from "react";
import img from "images/MyPhoto_small.jpg";
import "./_persons.scss";

const Person = () => {
    const fullName = "Vasilii Besschetnov",
          position = "Lead Web Developer";
    return (
        <div className="cnt-person">
            <div className="cnt-photo">
                <div className="person-photo">
                    <img src={img} alt={fullName} />
                </div>
            </div>
            <div className="cnt-name">
                <div className="person-name">
                    {fullName}
                </div>
                <div className="person-position">
                    {position}
                </div>
            </div>
        </div>
    )
};

export default Person;