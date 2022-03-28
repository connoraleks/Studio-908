import '../css/Navbar.css';
import Twitter from './TwitterSVG.tsx'
import Gem from './GemSVG.tsx'
import { useState, useEffect } from 'react';
import useWindowDimensions from '../hooks/WindowDimensions.ts';

const Navbar = () => {
    const { height, width } = useWindowDimensions();
    const [background, setBackground] = useState('transparent')
    const listenScrollEvent = (event) => {
        if (window.scrollY < height*0.55) {
            return setBackground("transparent")
        } else if (window.scrollY >= height*0.55) {
            return setBackground("black")
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <nav style={{backgroundColor: background}}>
            <div className='container'>
            {/* Text Logo - Use this if you don't have a graphic logo */}
            <a className="logo" href="#root"><Gem style={{marginBottom: "-0.15rem", height: "2.25rem", width: "2.25rem",fill: "white"}}/><div>Studio 908</div></a>
            {/* Full navbar, horizontal if space available, vertical hidden if not (visibility triggered by above button) */}
            <div className="links">
                <div className='pageLinks'>
                    <a  href="#about">About</a>
                    <a  href="#services">Services</a>
                    <a  href="#contact">Contact</a>
                </div>
                <div className='offsiteLinks'>
                    <a href="https://twitter.com"><Twitter style={{width: "100%", height: "100%",fill: "white"}}/></a>
                </div>
            </div>
            </div>
        </nav>

    );
};
export default Navbar;