// import assets >?

import { js, listIcon, pgSQL, python, reactSVG, tableau, tf2, twcss } from "../assets";

export const navLinks =[
    { id: "home", title:"Home"},
    { id: "about", title:"About"},
    { id: "skills", title:"Skills"},
    { id: "contact", title:"Contact"},
];

export const texts = [
    { 
        id:"aboutMe", 
        text:"Hello my name is Jean-Michael."
    }
];

export const externalLinks = [
    { 
        title: "",
        links: [
            {
                name: "",
                link: ""
            }
        ]
    }
];

export const skills = [

    {
        key: "01",
        title:"React",
        img: reactSVG,
        text:"Used in web development and app building"
    },
    {
        key: "03",
        title:"Python",
        img: python,
        text:"Used in data science, data analysis and web development"
    },
    {
        key: "07",
        title:"Others",
        img: listIcon,
        text:"Other tools I have used are C#, Figma, Tableau, TailwindCSS, and MATLab"
    },

]

export const projects = [
    {
        id: '01',
        title: "First Project",
        description: "This is the first project"
    },
    {
        id: '02',
        title: "Second Project",
        description: "This is the second project"
    },
    {
        id: '03',
        title: "Third Project",
        description: "This is the third project"
    },
]
