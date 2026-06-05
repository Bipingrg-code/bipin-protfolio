
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