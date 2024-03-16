import memberprofile from "../assets/memberprofile.png";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import linkdein from "../assets/social/linkedin.png";
import instagram from "../assets/social/instagram.png";
import web from "../assets/social/web.png";

const MemberAssemblyProfile = (props) => {

    return (
        <div>
            <div className="imgprofile">
                <div className="top left"></div>
                <div className="top right"></div>
                <div className="bottom right"></div>
                <div className="bottom left"></div>
                <img src={props.memberprofile ? props.memberprofile : ""} className="w-100" />
            </div>
            <h2>{props.name}</h2>
            <div className="socialss">
                <a href="https://facebook.com/"><img src={facebook} alt="" /></a>
                <a href="https://twitter.com/"><img src={twitter} alt="" /></a>
                <a href="https://instagram.com/"><img src={instagram} alt="" /></a>
                <a href="https://in.linkedin.com/"><img src={linkdein} alt="" /></a>
                <a href="/"><img src={web} alt="" /></a>
            </div>
        </div>
    )
}

export default MemberAssemblyProfile
