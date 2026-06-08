import { abilities } from "../constants"

const FeaturesCards = () => {
    return (
        <div className="w-full padding-x-lg">
            <div className="mx-auto grid-3-cols">
                {abilities.map((abiltity) => (
                    <div key={abiltity.title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={abiltity.imgPath} alt={abiltity.title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{abiltity.title}</h3>
                        <p className="text-white-50 text-lg">{abiltity.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturesCards