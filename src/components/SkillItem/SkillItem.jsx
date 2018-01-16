import React from "react";
import Grade from "components/Grade/Grade.jsx";import { subTitle, marginTopMiddle } from "styles/_layout.scss";

const SkillItem = ({
    name,
    grade
}) => {
    name = name;
    const res = [<span key="name">{name}</span>]
    if (grade) {
        res.push(<Grade key="grade" mark={grade} />);
    }
    return (
        <div className={marginTopMiddle}>{res}</div>
    );  
};

export default SkillItem;