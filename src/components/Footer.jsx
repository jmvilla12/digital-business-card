import GithubSVG from "./icons/GithubSVG"
import InstagramSVG from "./icons/InstagramSvg"

export default function Footer() {
    return (
        <footer>
            <div className="footer-buttons">
                <a href="https://github.com/jmvilla12" target="_blank" rel='noreferrer' className="bf1">
                    <div>
                        <GithubSVG />
                    </div>
                </a>                
                <a href="https://www.instagram.com/josemanuelvilla12/" target="_blank" rel='noreferrer' className="bf1">
                    <div>
                        <InstagramSVG />
                    </div>
                </a>  
            </div>
            
        </footer>
    )
}