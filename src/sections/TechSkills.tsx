import TechIconCardExperience from "../components/TechLogos/TechIconCardExperience"
import TitleHeader from "../components/TitleHeader"
import { techStackIcons } from "../constants"


const TechSkills = () => {
    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="How I Can Contribute & My Key Skills"
                    sub="🤝 What I Bring to the Table"
                />
                <div className="tech-grid">
                    {techStackIcons.map((techStack) => (
                        <div key={techStack.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIconCardExperience model={techStack} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{techStack.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechSkills