
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

export const counterItems:CounterItemsType[] = [
    {value:15,suffix:'+',label:'Projects Completed'},
    {value:10,suffix:'+',label:'Happy Clients'},
    {value:5,suffix:'+',label:'Years of Experience'},
    {value:20,suffix:'+',label:'Completed Projects'},
]