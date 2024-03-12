import memberprofile from "../assets/memberprofile.png";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import linkdein from "../assets/social/linkedin.png";
import instagram from "../assets/social/instagram.png";

const MemberCouncilProfile = (props) => {
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
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkdein} alt="" />
            </div>
        </div>
    )
}

export default MemberCouncilProfile
