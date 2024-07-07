import fotoJose from '../assets/Foto-jose.jpg';
import EmailSvg from './icons/EmailSvg';
import LinkedinSvg from './icons/LinkedinSvg';

export default function Info() {
    return (
        <>
            <header>
                <div className='image-container'>
                    <img src={fotoJose} alt="Formal Jose" id='photo-info'/>
                </div>

                <h1>Jose Manuel Villa</h1>
                <h2>Junior FrontEnd Developper</h2>
                
                <div className='buttons'>
                    <a href="mailto:josemanuel.villa@utp.edu.co" target="_blank" rel='noreferrer'>
                        <div className='button-social' id='button-email'>
                            <EmailSvg />
                            <span>Email</span>
                        </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/jose-manuel-villa-romero/" target="_blank" rel='noreferrer'>
                        <div className='button-social' id='button-linkedin'>
                            <LinkedinSvg />
                            <span>LinkedIn</span>
                        </div>
                    </a>
                    
                </div>
                
            </header>
            
        </>
    )
}
