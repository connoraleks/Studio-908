import '../css/Services.css'
import LaptopSVG from "./LaptopSVG.tsx";
import FlowSVG from "./FlowSVG.tsx";
import BlockSVG from "./BlockSVG.tsx";
import {useState, useEffect, useRef} from 'react';
const Services = () => {
    const [selected, setSelected] = useState([false, false, false]);
    const [frontendVisible, setFrontendVisible] = useState({display: "none"})
    const [backendVisible, setBackendVisible] = useState({display: "none"})
    const [web3Visible, setWeb3Visible] = useState({display: "none"})
    const services = useRef(null);
    useEffect(() => {
        if(selected[0]){
            setFrontendVisible({display: ""});
        }
        else setFrontendVisible({display: "none"});
        if(selected[1]){
            setBackendVisible({display: ""});
        }
        else setBackendVisible({display: "none"});
        if(selected[2]){
            setWeb3Visible({display: ""});
        }
        else setWeb3Visible({display: "none"});
    }, [selected])
    const closeWindows = () => {
        setSelected([false, false, false]);
        services.current.scrollIntoView();
    }
    return (
        <div ref ={services} id="services" className="services-container">
            <h3>Services</h3>
            <p>Studio 908 offers both traditional and <b style={{color: "black"}}>Web 3.0</b> services</p>
            <div className="tiles-container">   
                <div id="frontend" className="tiles" onClick={() => {
                    setSelected([true, false, false])
                }}>
                    <div className="tile-header">
                        <LaptopSVG style={{height: "2.25rem", width: "2.25rem",fill: "black"}}/>
                        <h4>Frontend</h4>
                    </div>
                </div>
                <div id="backend" className="tiles" onClick={() => {
                    setSelected([false, true, false])
                }}>
                    <div className="tile-header">
                        <FlowSVG style={{height: "2.25rem", width: "2.25rem",fill: "black"}}/>
                        <h4>Backend</h4>
                    </div>
                </div>
                <div id="web3" className="tiles" onClick={() => {
                    setSelected([false, false, true])
                }}>
                    <div className="tile-header">
                        <BlockSVG style={{height: "2.25rem", width: "2.25rem",fill: "black"}}/>
                        <h4>Web 3.0</h4>
                    </div>
                </div>
            </div>

            <div className="lightbox" style={frontendVisible}>
                <div className="lightboxContent">
                    <div className="lightboxNavbar">
                        <button onClick={closeWindows}>Close</button>
                    </div>
                    <h1>Frontend Services</h1>
                    <div className="lightboxBody">
                        <p>Explanation</p>
                    </div>
                </div>
            </div>
            <div className="lightbox" style={backendVisible}>
                <div className="lightboxContent">
                    <div className="lightboxNavbar">
                        <button onClick={closeWindows}>Close</button>
                    </div>
                    <h1>Backend Services</h1>
                    <div className="lightboxBody">
                        <p>Explanation</p>
                    </div>
                </div>
            </div>
            <div className="lightbox" style={web3Visible}>
                <div className="lightboxContent">
                    <div className="lightboxNavbar">
                        <button onClick={closeWindows}>Close</button>
                    </div>
                    <h1>Web 3.0 Services</h1>
                    <div className="lightboxBody">
                        <p>Explanation</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;