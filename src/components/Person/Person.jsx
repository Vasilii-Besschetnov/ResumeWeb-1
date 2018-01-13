import React from "react";
import img from "images/MyPhoto_small.jpg";
import "./_persons.scss";

const Person = () => {
    return (
        <div className="cnt-person">
            <div className="cnt-photo">
                <div className="person-photo">
                    <img src={img} alt="Vasilii Besschetnov" />
                </div>
            </div>
            <div className="cnt-name">
                <div className="person-name">
                    Vasilii Besschetnov
                </div>
                <div className="person-position">
                    Lead Web Developer
                </div>
            </div>
        </div>
    )
};

export default Person;