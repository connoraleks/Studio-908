import '../css/Services.css'
import LaptopSVG from "./LaptopSVG.tsx";
import FlowSVG from "./FlowSVG.tsx";
import BlockSVG from "./BlockSVG.tsx";
import {useState, useEffect, useRef} from 'react';
const Services = () => {
    const [selected, setSelected] = useState([false, false, false]);
    const [frontendClass, setFrontendClass] = useState("tiles")
    const [backendClass, setBackendClass] = useState("tiles")
    const [web3Class, setWeb3Class] = useState("tiles")
    const services = useRef(null);
    useEffect(() => {
        if(selected[0]){
            setFrontendClass("selected");
        }
        else setFrontendClass("tiles");
        if(selected[1]){
            setBackendClass("selected");
        }
        else setBackendClass("tiles");
        if(selected[2]){
            setWeb3Class("selected");
        }
        else setWeb3Class("tiles");
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
                <div id="frontend" className={frontendClass} onClick={() => {
                    setSelected([!selected[0], false, false])
                }}>
                    <div className="tile-header">
                        <LaptopSVG style={{height: "2.25rem", width: "2.25rem",fill: "black"}}/>
                        <h4>Frontend</h4>
                    </div>
                </div>
                <div id="backend" className={backendClass} onClick={() => {
                    setSelected([false, !selected[1], false])
                }}>
                    <div className="tile-header">
                        <FlowSVG style={{height: "2.25rem", width: "2.25rem",fill: "black"}}/>
                        <h4>Backend</h4>
                    </div>
                </div>
                <div id="web3" className={web3Class} onClick={() => {
                    setSelected([false, false, !selected[2]])
                }}>
                    <div className="tile-header">
                        <BlockSVG style={{height: "2.25rem", width: "2.25rem",fill: "black"}}/>
                        <h4>Web 3.0</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;