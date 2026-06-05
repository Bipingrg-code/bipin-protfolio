import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)
    //   GSAP ANIMATION FOR SHOWCASE SECTION
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration:1, delay: 0.3 * (index + 1), ease: 'power2.inOut', scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 60%',
                        toggleActions: 'play none none reverse',
                    }
                }
            )
        })
        // gsap.fromTo(
        //     sectionRef.current,
        //     { opacity: 0 },
        //     { opacity: 1, duration: 1.5 }
        // )
    }, [sectionRef, project1Ref, project2Ref, project3Ref])

    return (
        <section ref={sectionRef} id="works" className="app-showcase">
            <div className="showcaselayout">
                {/* LEFT SHOWCASE */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="new" />
                    </div>
                    <div className="text-content">
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore!
                        </h2>
                        <p className="text-white-50 md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum labore veritatis autem placeat consectetur eius alias dolores nulla distinctio.</p>
                    </div>
                </div>

                {/* RIGHT SHOWCASE */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="project2" />
                        </div>
                        <h2>Lorem ipsum dolor sit amet.
                        </h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project3.png" alt="project2" />
                        </div>
                        <h2>Lorem ipsum dolor sit amet.
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection