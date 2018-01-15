import React from "react";
import { section, sectionIcon, sectionPeriod, sectionContent, circle, middle } from "./_contentRow.scss";

const Section = ({
    content,
    iconCls,
    iconHidden,
    isLargeIcon,
    period,
    periodHidden
}) => {
    const cls = [];
    
    if (!iconHidden) {
        cls.push(circle);
        if (isLargeIcon) cls.push(middle);
    }
    if (iconCls) cls.push(iconCls);
    
    return (<div class={section}>
            <div class={sectionIcon}>
                <div className={cls.join(" ")}></div>
            </div>
            <div class={sectionContent}>{content}</div>
            {!periodHidden && (<div class={sectionPeriod}>{period}</div>)}
    </div>);
};


export default Section;