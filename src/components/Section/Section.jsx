import React from "react";
import ContentRow from "components/ContentRow/ContentRow.jsx";
import { title as titleCls } from "styles/_layout.scss";

const Section = ({
    title,
    iconCls,
    items
}) => {
    return (<React.Fragment>
        <ContentRow key="sectionTitle"
            content={<span className={titleCls}>{title || "STUB SECTION TITLE"}</span>}
            isLargeIcon={true}
            iconCls={iconCls}/>
    </React.Fragment>);
    /*
    return (
        <div className="section">
            <ContentItem big={titleEl} />
            {items.map((item, i) => <SectionItem key={i} {...item} />)}
        </div>
    );*/
};


export default Section;