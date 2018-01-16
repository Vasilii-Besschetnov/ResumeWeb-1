import React from "react";
import { grade, mark as markCls, markRest } from "./_grade.scss";

const toPercent = (v) => {
    return (v / 5 * 100) + "%";
};

const Grade = ({
    mark
}) => {
    mark = toPercent(mark || 4);
    return (
        <span className={grade}>
            <div className={markCls} style={{width: mark}}></div>
            <div className={markRest} style={{left: mark}}></div>
        </span>
    )
};

export default Grade;