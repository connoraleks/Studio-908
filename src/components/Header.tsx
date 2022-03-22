import '../css/Header.css'
import Gem from "./Gem.tsx";
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
                        <p className="">Studio 908 makes daunting tasks simple.<br />Looking to get in touch?</p>
                        <a className="button" href="#contact">Contact Us</a>
                    </div>
                </div> {/* end of col */}
                <div className='headerImage'>
                    <Gem style={{height:"100%", width:"100%", fill:"white"}}/>
                </div>
            </div> {/* end of container */}
        </div>
    );
};
export default Header;