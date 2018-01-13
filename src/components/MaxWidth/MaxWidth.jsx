import React from "react";
import { maxWidth } from "./_maxWidth.scss";

const MaxWidth = ({
    className,
    children
}) => {
    let cls = [maxWidth];
    if (className) cls.push(className);
    
    return (
        <div className={cls.join(" ")}>
            {children}
        </div>    
    );
};

export default MaxWidth;