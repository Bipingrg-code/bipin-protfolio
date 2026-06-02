import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { words } from '../constants'
const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="../images/bg.png" alt="Hero Background" />
            </div>
            <div className="hero-layout">
                {/* LEFT HERO */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex flex-center md:gap-2 gap-1 pb-2 ">
                                                <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-8 md:p-2 p-1 rounded-full bg-white-50" />
                                                {word.text}
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into RealProjects</h1>
                            <h1>that deliver Value</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none ">Hi, I am Bipin Gurung, passiniot Fullstack developer based in Nepal</p>
                        <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See My Work" />
                    </div>
                </header>
                {/* RIGHT HERO-3D Pic */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero