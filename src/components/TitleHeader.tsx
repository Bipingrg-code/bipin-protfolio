import type { TitleHeaderPropType } from "../constants"

const TitleHeader = ({ title, sub }: TitleHeaderPropType) => {
    return (
        <div className="flex items-center flex-col gap-5">
            <div className="hero-badge">
                <p>{sub}</p>
            </div>
            <div className="font-semibold md:text-5xl text-3xl text-center">
                {title}
            </div>
        </div>
    )
}

export default TitleHeader