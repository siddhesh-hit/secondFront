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
            {/* <div className={`${location === '/' ? 'footer' : location === '/Homepage2' ? 'otherColor12' : 'newfooter'}`}> */}
            <div className={`${location === '/' ? 'footer' :
                location === '/Homepage2' ? 'otherColor12' :
                    location === '/Homepage1' ? 'newfooter' :
                        location === '/Debate' ? 'footer' :
                            location === '/DebateDetails' ? 'footer' :
                                'footer'  // Default value if none of the conditions are met
                }`}>
                <div className="firstfoot">
                    <Link to="/">सतत विचारले जाणारे प्रश्न</Link>
                    <Link to="/">फोटो गॅलरी</Link>
                </div>
                <div className="secondfoot">
                    <Link to="/">
                        मुख्यपृष्ठ
                    </Link>
                    <Link to="/AboutUs">
                        विधानमंडळ
                    </Link>
                    <Link to="/Library">
                        ग्रंथालय
                    </Link>
                    <Link to="/">
                        बातम्या
                    </Link>
                    <Link to="/">
                        राज्यपाल
                    </Link>
                </div>
                <div className="thirdfooter">
                    <Link to="/HelpDesk">अभिप्राय</Link>
                    <Link to="/">मदत आणि समर्थन</Link>
                    <Link to="/">महत्वाचा दुवा</Link>
                    <Link to="/">सेवा अटी</Link>
                    <Link to="/">साइट मॅप</Link>
                    <Link to="/">सूचना</Link>
                    <Link to="/">अभ्यागतांची संख्या</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
