import darkMode from '../../assets/svg/darkMode.svg';
import lightMode from '../../assets/svg/lightMode.svg';
import mute from '../../assets/svg/mute.svg';
import unmute from '../../assets/svg/unmute.svg';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            
            <a className="navbar-brand" href="/">Jordan Heersink</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
           
                    
                    <li className="nav-item mx-4">
                        <a className="nav-link active" href="#">Home</a>
                    </li>

                    <li className="nav-item mx-4">
                        <a className="nav-link active" href="#">About Me</a>
                    </li>

                    <li className="nav-item  mx-4">
                        <a className="nav-link active" href="#">Projects</a>
                    </li>

                    <li className="nav-item  mx-4">
                        <a className="nav-link active" href="#">Resume</a>
                    </li>

                    <button className='icon-button'>
                        <img src={darkMode}></img>
                    </button>

                    <button className='icon-button'>
                        <img src={lightMode}></img>
                    </button>

                    <button className='icon-button'>
                        <img src={mute}></img>
                    </button>

                    <button className='icon-button'>
                        <img src={unmute}></img>
                    </button>
                </ul>

            </div>
        </nav>
    );
};