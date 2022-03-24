import '../css/Header.css'
import Gem from "./GemSVG.tsx";
const Header = () => {
    return (
        <div className="header">
            <div className="ocean">
                <div className="wave" />
                <div className="wave" />
            </div>
            <div className="container">
                <div className="headerText">
                    <div className="text">
                        <h1 className="">Bring your ideas to life.</h1>
                        <p style={{color: "#c5c3f0"}}>Studio 908 makes <strong>daunting</strong> projects <strong>simple</strong>.<br />Looking to get in touch?</p>
                        <a className="button" href="#contact">Contact Us</a>
                    </div>
                </div> {/* end of col */}
                <div className='headerImage'>
                    <div className="image">
                        <Gem style={{height:"auto", width:"100%", fill:"white"}}/>
                    </div>
                </div>
            </div> {/* end of container */}
        </div>
    );
};
export default Header;