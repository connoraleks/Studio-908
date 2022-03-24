import '../css/Services.css'
import LaptopSVG from "./LaptopSVG.tsx";
import FlowSVG from "./FlowSVG.tsx";
import BlockSVG from "./BlockSVG.tsx";
const Services = () => {
    return (
        <div id="services" className="services-container">
            <h3>Services</h3>
            <p>Studio 908 offers a variety of services traditionally and in Web 3.0</p>
            <div className="tiles-container">
                <div className="tiles">
                    <div className="tile-header">
                        <LaptopSVG style={{height: "2.25rem", width: "2.25rem",fill: "#370617"}}/>
                        <h4>Frontend</h4>
                    </div>
                    <p>This is the explanation</p>
                </div>
                <div className="tiles">
                    <div className="tile-header">
                        <FlowSVG style={{height: "2.25rem", width: "2.25rem",fill: "#370617"}}/>
                        <h4>Backend</h4>
                    </div>
                    <p>This is the explanation</p>
                </div>
                <div className="tiles">
                    <div className="tile-header">
                        <BlockSVG style={{height: "2.25rem", width: "2.25rem",fill: "#370617"}}/>
                        <h4>Web 3.0</h4>
                    </div>
                    <p>This is the explanation</p>
                </div>
            </div>
        </div>
    );
}

export default Services;