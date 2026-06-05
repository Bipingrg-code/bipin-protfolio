import { logoIconsList, type LogoIconProps } from "../constants"

const LogoIcon = ({ icon }: LogoIconProps) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge" />
            <div className="gradient-edge" />
            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icons) => (
                        <LogoIcon key={icons.name} icon={icons} />
                    ))}
                    {logoIconsList.map((icons) => (
                        <LogoIcon key={icons.name} icon={icons} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoSection