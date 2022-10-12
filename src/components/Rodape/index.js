import { FiLinkedin, FiInstagram } from 'react-icons/fi'
import './rodape.css';

function Rodape() {
    return(
        <footer className='containerRodape'>
            <span>Developed By João Lucas Melo</span>

            <div className='iconsApp'>
                <a target='blank' rel='external' href="https://www.linkedin.com/in/jlucasmelo/">
                     <FiLinkedin  className='linkedinIcon' />
                </a>


                <a target='blank' rel='external' href="https://www.instagram.com/jlms.dev/">
                     <FiInstagram className='instagramIcon' />
                </a>
            </div>
        </footer>
    );
}

export default Rodape;