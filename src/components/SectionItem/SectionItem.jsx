import React from "react";
import ContentRow from "components/ContentRow/ContentRow.jsx";
import { subTitle, marginTopMiddle } from "styles/_layout.scss";

const dateToString = date => {
    if (!date) return "present";
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    return `${date.getFullYear()}-${month}`;
}

const getPeriodStr = ({
    startDate,
    endDate
}) => {
    return startDate ? (dateToString(startDate) + " - " + dateToString(endDate)) : null;
}

const SectionItem = ({
    title,
    period,
    content    
}) => {   
    content = content || "some exp";
    const periodEl = getPeriodStr(period || {});
    const outputEls = []; // todo check if it really needed. I need formatting
    
    if (title) {
        outputEls.push(<ContentRow key="sectionItemTitle"
            period={periodEl}
            content={<div className={subTitle}>{title}</div>}
            isLargeIcon={false}
            rootCls={marginTopMiddle}
            />
        );
    }
    
    outputEls.push(<ContentRow key="content"
        period={!title ? periodEl : null}
        iconHidden={!!title}
        content={<div dangerouslySetInnerHTML={{__html: content}}></div>}
        isLargeIcon={false}
        rootCls={title ? "" : marginTopMiddle}/>);
    
    
    return (
        <React.Fragment>
            {outputEls}
        </React.Fragment>
    );
};


export default SectionItem;