import React from "react";
import PropTypes from 'prop-types';
import { sectionList, vertLine } from "./_sectionList.scss";
import ContentRow from "components/ContentRow/ContentRow.jsx";

const SectionList = ({
    sections
}) => {
    return (
        <div className={sectionList}>
            {sections.map(s => <ContentRow key={s.title} {...s} />)}
            <div className={vertLine}></div>
        </div>
    );
};

SectionList.prototype = {
    sections: PropTypes.array
}

SectionList.defaultProps = {
    sections: Array(3).fill({}) // todo relpace with []
};


export default SectionList;