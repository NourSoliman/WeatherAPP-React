import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook , faGithub} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://www.facebook.com/nour.sliman.18/" target="_blank"><FontAwesomeIcon icon={faFacebook} className="facebook" id="icons"/></a>
                <a href="https://github.com/NourSoliman" target="_blank"><FontAwesomeIcon icon={faGithub} className="github" id="icons"/></a>
            </div>
        </div>
    )
}
export default Footer