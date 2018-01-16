import React from "react";
import ContentRow from "components/ContentRow/ContentRow.jsx";
import { title as titleCls, marginTopLarge } from "styles/_layout.scss";
import SectionItem from "components/SectionItem/SectionItem.jsx";

const Section = ({
    title,
    iconCls,
    items
}) => {
    return (<React.Fragment>
        <ContentRow key="sectionTitle" rootCls={marginTopLarge}
            content={<span className={titleCls}>{title || "STUB SECTION TITLE"}</span>}
            isLargeIcon={true}
            iconCls={iconCls}/>
            {items.map((item, i) => <SectionItem key={"item_" + i} {...item} />)}
    </React.Fragment>);
};


export default Section;