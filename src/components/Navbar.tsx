import { useEffect, useState } from "react";
import { navLinks } from "../constants"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {

        const handleScroll = () => {
            const isScrolled = window.scrollY > 10; // Adjust the scroll threshold as needed
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">Dev | Bipin</a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map((nav) => (
                            <li key={nav.name} className="group">
                                <a href={nav.link}>
                                    <span>{nav.name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a className="contact-btn group" href="#contact">
                    <div className="inner">
                        <span className="contact-btn-text">Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Navbar