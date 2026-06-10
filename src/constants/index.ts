
type NavlinkType = {
    name: string;
    link: string;
}
export const navLinks: NavlinkType[] = [
    {
        name: "Work",
        link: "#works"
    },
    {
        name: "Experience",
        link: "#experience"
    }
    ,
    {
        name: "Skills",
        link: "#skills"
    },
    {
        name: "Testimonials",
        link: "#testimonials"
    }
]
export const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
];

export interface ButtonPropType {
    id?: string;
    text: string;
    className: string;
}

type CounterItemsType = {
    value: number;
    suffix: string;
    label: string;
}

export const counterItems: CounterItemsType[] = [
    { value: 15, suffix: '+', label: 'Projects Completed' },
    { value: 10, suffix: '+', label: 'Happy Clients' },
    { value: 5, suffix: '+', label: 'Years of Experience' },
    { value: 20, suffix: '+', label: 'Completed Projects' },
]
export type logoIconsListItemType = {
    imgPath: string,
    name: string
}
export type LogoIconProps = {
    icon: logoIconsListItemType
}

export const logoIconsList: logoIconsListItemType[] = [
    { imgPath: "/images/logos/company-logo-1.png", name: "Comapany1" },
    { imgPath: "/images/logos/company-logo-2.png", name: "Comapany1" },
    { imgPath: "/images/logos/company-logo-3.png", name: "Comapany1" },
    { imgPath: "/images/logos/company-logo-4.png", name: "Comapany1" },
    { imgPath: "/images/logos/company-logo-5.png", name: "Comapany1" },
    { imgPath: "/images/logos/company-logo-6.png", name: "Comapany1" },
    { imgPath: "/images/logos/company-logo-7.png", name: "Comapany1" },
    { imgPath: "/images/logos/company-logo-8.png", name: "Comapany1" },
]
export const abilities = [
    {
        imgPath: "/images/chat.png",
        title: "Quality Focus",
        desc: "Delivering heigh quality results while mainting attention to detail."
    },
    {
        imgPath: "/images/time.png",
        title: "Quality Focus",
        desc: "Delivering heigh quality results while mainting attention to detail."
    },
    {
        imgPath: "/images/chat.png",
        title: "Quality Focus",
        desc: "Delivering heigh quality results while mainting attention to detail."
    },

]

export type TitleHeaderPropType = {
    title: string,
    sub: string
}
export type ExperienceCardType = {
    review: string
    imgPath: string
    logoPath: string
    title: string
    date: string
    responsibilities: string[],
    index?: unknown
}

export const experienceCard: ExperienceCardType[] = [
    {
        review: "Bipin Contributions to Fullstack web application have ",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "2023  - 2025",
        responsibilities: [
            "Developed and maintained user-facing features",
            "Developed and maintained user-facing features",
            "Developed and maintained user-facing features"
        ]
    },
    {
        review: "Bipin Contributions to Fullstack web application have ",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "2023  - 2025",
        responsibilities: [
            "Developed and maintained user-facing features",
            "Developed and maintained user-facing features",
            "Developed and maintained user-facing features"
        ]
    }
    , {
        review: "Bipin Contributions to Fullstack web application have ",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "2023  - 2025",
        responsibilities: [
            "Developed and maintained user-facing features",
            "Developed and maintained user-facing features",
            "Developed and maintained user-facing features"
        ]
    }
]
export type techStackImgsTypes = {
    name: string,
    imgPath: string
}
export const techStackImgs: techStackImgsTypes[] = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];
type techStackIconsTypes = {
    name: string,
    modelPath: string,
    scale: number,
    rotation: number[],
}
export const techStackIcons: techStackIconsTypes[] = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];
export type testimonialsTypes = {
    name: string,
    mentions: string,
    review: string,
    imgPath: string
}
export const testimonials: testimonialsTypes[] = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

