const logotext = "MICHAEL W PICOT";
const meta = {
    title: "Michael Picot",
    description: "I’m Michael Picot Full stack devloper, currently working in Sacramento",
};

const introdata = {
    title: "I’m Michael Picot",
    description: "Full-stack developer with a background in environmental engineering and project management.",
    your_img_url: "https://i.imgur.com/B82zAYz.jpg",
};

const dataabout = {
    title: "About Me ",
    aboutme: "I'm a full-stack developer located in Sacramento and I enjoy using technology to help others. Before I ventured to learning programming, I thrived as a construction project manager with strong leadership and time management skills.",
};
const worktimeline = [{
        jobtitle: "Environmental Engineer",
        where: "Ahtna Design-Build",
        date: "2022",
    },
    {
        jobtitle: "Environmental Engineer",
        where: "Tetra Tech",
        date: "2020",
    },
];

const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "jQuery", "Node.js", "Express", "RESTful APIs", "PostgreSQL"
];



const dataportfolio = [{
        img: "https://camo.githubusercontent.com/883deaf2c515c8e4fbf7e2c0757886c9d484172b0b404177b6f959dce3fb7c62/68747470733a2f2f692e696d6775722e636f6d2f6936594d39704c2e706e67",
        description: "Grub-Dash backend project using node and express.js.",
        link: "https://github.com/MichaelWPicot/grub-dash-backend",
    },
    {
        img: "https://camo.githubusercontent.com/347b5724adbc1ff5496c86f44c254c27d593bec4ab9aa5a8ac8b91c70f2b1c57/68747470733a2f2f692e696d6775722e636f6d2f574e68554c31702e706e67",
        description: "Flashcard application using React Hooks.",
        link: "https://github.com/MichaelWPicot/flashcard-app",
    },
    {
        img: "https://camo.githubusercontent.com/7e9637b2be36cdeec8969d652bbd7f5997a10e3f4b6ffcbda9ac0838d301efee/68747470733a2f2f692e696d6775722e636f6d2f7550755a7037562e706e67",
        description: "Recipe tracking app using React Hooks.",
        link: "https://github.com/MichaelWPicot/recipe-tracking-app",
    },
    {
        img: "https://camo.githubusercontent.com/c890da8ab9153adaab4ca995b5112cd64966cbe4693acdd05c91c5f332e2f85e/68747470733a2f2f692e696d6775722e636f6d2f485547676456492e706e67",
        description: "Decoder Ring application using Javascript.",
        link: "https://github.com/MichaelWPicot/decoder-ring",
    },
    {
        img: "https://i.imgur.com/q8F9566.jpg",
        description: "Thinkfulbnb using React.js to display frontend.",
        link: "https://github.com/MichaelWPicot/thinkful-bnb",
    },
    {
        img: "https://camo.githubusercontent.com/ffd6bf9ba83257d81231392c31a42f6b018aae9497742824b86133669a663b9f/68747470733a2f2f692e696d6775722e636f6d2f495a515a794d782e706e67",
        description: "Local Library project focused on database filtering and sorting",
        link: "https://github.com/MichaelWPicot/local-library-project",
    },
];

const contactConfig = {
    YOUR_EMAIL: "michael1picot@gmail.com",
    description: "If you're looking for a new team member or are looking to colloborate on a project please reach out to my via my email or send me a message! I look forward to hearing from you. ",
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
};

const socialprofils = {
    github: "https://github.com/MichaelWPicot/",
    linkedin: "https://www.linkedin.com/in/michaelwpicot/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};