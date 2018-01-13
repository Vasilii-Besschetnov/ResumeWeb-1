import React from "react";
import img from "images/MyPhoto_small.jpg";
import { cntPerson, personName, personPosition, personPhoto, cntName } from "./_persons.scss";

const Person = () => {
    const fullName = "Vasilii Besschetnov",
          position = "Lead Web Developer";
    return (
        <div className={cntPerson}>
            <div className="cnt-photo">
                <div className={personPhoto}>
                    <img src={img} alt={fullName} />
                </div>
            </div>
            <div className={cntName}>
                <div className={personName}>
                    {fullName}
                </div>
                <div className={personPosition}>
                    {position}
                </div>
            </div>
        </div>
    )
};

export default Person;