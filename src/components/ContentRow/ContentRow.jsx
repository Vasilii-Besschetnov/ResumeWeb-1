import React from "react";
import { contentRow, rowIcon, rowPeriod, rowContent, circle, middle } from "./_contentRow.scss";

const ContentRow = ({
    content,
    rootCls,
    iconCls,
    iconHidden,
    isLargeIcon,
    period,
    periodHidden
}) => {
    const cls = [],
        style = {};
    
    if (!iconHidden) {
        cls.push(circle);
        if (isLargeIcon) {
            cls.push(middle);
            style.alignItems = "center";
        }
        
    }
    if (iconCls) cls.push(iconCls);
    
    return (<div className={`${contentRow} ${rootCls}`} style={style}>
            <div className={rowIcon}>
                <div className={cls.join(" ")}></div>
            </div>
            <div className={rowContent}>{content}</div>
            {!periodHidden && (<div className={rowPeriod}>{period}</div>)}
    </div>);
};


export default ContentRow;