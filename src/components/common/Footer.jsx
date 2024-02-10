import { useState } from 'react'
import { Link } from "react-router-dom"
const Footer = () => {
    const [location, setLocation] = useState('/')

    if (window.location.pathname !== location) {
        setLocation(window.location.pathname)
    }
    return (
        <div>
            {/* <div className={`${location === '/' ? 'footer' : 'newfooter'}`}> */}
            <div className={`${location === '/' ? 'footer' : location === '/Homepage2' ? 'otherColor12' : 'newfooter'}`}>
                <div className="firstfoot">
                    <Link to="/">FAQs</Link>
                    <Link to="/">Photo Gallery</Link>
                </div>
                <div className="secondfoot">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/AboutUs">
                        About
                    </Link>
                    <Link to="/Library">
                        Library
                    </Link>
                    <Link to="/">
                        News
                    </Link>
                    <Link to="/">
                        Governor
                    </Link>
                </div>
                <div className="thirdfooter">
                    <Link to="/HelpDesk">Feedback</Link>
                    <Link to="/">Help & support</Link>
                    <Link to="/">Important Links</Link>
                    <Link to="/">Terms of service</Link>
                    <Link to="/">Sitemap</Link>
                    <Link to="/">Notification</Link>
                    <Link to="/">Vistors count 🐈</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
