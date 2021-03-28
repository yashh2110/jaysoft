import React from 'react'
import Footer from '../../components/footer/footer'
import MainNav from '../../components/nav/nav'
import "./contact.css"
import Fb from "../../images/Facebook.png"
import In from "../../images/Instagram.png"
import Ln from "../../images/LinkedIn.png"
import Gm from "../../images/Gmail.png"
function Contact() {
    return (
        <div className="App">
            <MainNav />
            <div className="contact-inline">
                <div>
                    <h4 className="text-center"> Address</h4>
                    <p className="text-center">
                    11116 turnbridge dr
                    <br />
                    Jacksonville Florida 32256
                    </p>
                    <h4 className="text-center"> Phone</h4>
                    <p className="text-center">
                    +1 (904) 803-1857
                    </p>
                    <h4 className="text-center"> Email</h4>
                    <p className="text-center">
                    hr@jaysoftconsulting.com
                    </p>
                    <h4 className="text-center">Social Media</h4>
                    <br/>
                    <a href="#"><img src={Fb} width="47" alt="fb"></img></a>
                    <a href="#"><img src={Ln} width="47" alt="Ln"></img></a>
                    <a href="#"><img src={In} width="47" alt="In"></img></a>
                    <a href="#"><img src={Gm} width="47" alt="Gm"></img></a>
                </div>
                <div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.9006622822812!2d-81.52945268500824!3d30.23990918181156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5caba852e52a3%3A0xcac3f83dc222d73a!2s11116%20Turnbridge%20Dr%2C%20Jacksonville%2C%20FL%2032256%2C%20USA!5e0!3m2!1sen!2sin!4v1616435944082!5m2!1sen!2sin"  height="450" style={{border:"0",borderRadius:"10px"}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
