import React from "react";
import ContentRow from "components/ContentRow/ContentRow.jsx";
import { title as titleCls, marginTopLarge } from "styles/_layout.scss";
import SkillItem from "components/SkillItem/SkillItem.jsx";

const SkillSection = ({
    title,
    iconCls,
    skills
}) => {
    return (
        <React.Fragment>
            <ContentRow key="sectionTitle" rootCls={marginTopLarge}
                content={<span className={titleCls}>{title || "STUB SECTION TITLE"}</span>}
                periodHidden={true}
                isLargeIcon={true}
                iconCls={iconCls}/>
            {skills.map((item, i) => <SkillItem key={"item_" + i} {...item} />)}
        </React.Fragment>
    );
};

SkillSection.defaultProps = {
    skills: Array(3).fill({}) // todo relpace with []
};

export default SkillSection;