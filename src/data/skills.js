import { iconTree, iconUserTie, iconFlag } from "styles/_iconfont.scss";

const skills = [
        {
            title: "Skills",
            iconCls: iconTree,
            skills: [
                {
                    name: "Javascript",
                    grade: 5,
                },
                {
                    name: "React, Redux, Webpack, Mocha, Jest",
                    grade: 5
                },
                {
                    name: "HTML/CSS/LESS/SASS",
                    grade: 5
                },
                {
                    name: "jQuery",
                    grade: 5
                },
                {
                    name: "Ext Js",
                    grade: 4
                },
                {
                    name: "Nightwatch, selenium",
                    grade: 3
                },
                {
                    name: ".Net/ASP.NET/C#",
                    grade: 4
                },
                {
                    name: "Java",
                    grade: 2
                },
                {
                    name: "T-SQL",
                    grade: 3
                },
            ]
        },
        {
            title: "Soft Skills",
            iconCls: iconUserTie,
            skills: [
                {
                    name: "Agile/SCRUM/Lean",
                    grade: 5,
                },
                {
                    name: "Communication",
                    grade: 4
                },
                {
                    name: "Leadership",
                    grade: 5
                },
                {
                    name: "Team work",
                    grade: 5
                },
            ]
        },
        {
            title: "Languages",
            iconCls: iconFlag,
            skills: [
                {
                    name: "English",
                    grade: 4,
                    gradeDesc: "Upper Intermediate"
                },
                {
                    name: "Russian",
                    grade: 5,
                    gradeDesc: "Native"
                }
            ]
        }
    ];

export default skills;