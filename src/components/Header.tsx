import '../css/Header.css'
import ThreeBox from './threejsComponents/ThreeBox.tsx';

const Header = () => {
    return (
        <div className="header">
            <div className="ocean">
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />
            </div>
            <div className="container">
                <div className="headerText">
                    <div className="text">
                        <h1>Bring your ideas to life.</h1>
                        <p>Studio 908 makes <strong>daunting</strong> projects <strong>simple</strong>.<br />Looking to get in touch?</p>
                        <a className="button" href="#contact">Contact Us</a>
                    </div>
                </div> {/* end of col */}
                <div className='headerImage'>
                    <ThreeBox color={'#9d0208'}/>
                </div>
            </div> {/* end of container */}
        </div>
    );
};
export default Header;