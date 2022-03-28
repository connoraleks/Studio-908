import '../css/Header.css'
import ThreeBox from './ThreeBox.tsx';
import useWindowDimensions from '../hooks/WindowDimensions.ts';

const Header = () => {
    const { height, width } = useWindowDimensions();
    return (
        <div className="header">
            <div className="ocean">
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />
            </div>
            <div className="galaxy">
                <ThreeBox numBoxes={height*width/50000} size={0.5} color={'red'} animate={true}/>
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
                    <ThreeBox numBoxes={1} size={5} color={'white'} animate={false}/>
                </div>
            </div> {/* end of container */}
        </div>
    );
};
export default Header;