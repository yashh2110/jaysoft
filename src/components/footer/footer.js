import React from 'react'
import Logo from "../../images/logo.png"
import "./footer.css"
function Footer() {
    return (
        <footer className="footer">
            <div class="footer-inline">
                <div style={{maxWidth:"500px"}}>
                    <div style={{display:"flex",justifyContent:"left",alignItems:"center"}}>
                    <img width="90" style={{marginRight:"20px"}} src={Logo} alt="Jay Soft"/>
                    <b style={{fontSize:"1.5em"}}>JaySoft</b>
                    </div>
                    
                    <br/>
                    <p>“knowledge is not skill, knowledge plus ten thousand times is skill” is what we believe. The team at Jay Soft has years of experience in the field of Information Technology which provides services to the clients seeking expertise in analysis, design, development, testing, deployment & support.</p>
                </div>
                <div>
                    <h4 className="text-white text-left">Address</h4>
                    <p  className="text-white text-left">
                    11116 turnbridge dr
                    <br/>
                    Jacksonville Florida 32256
                    </p>
                    <br/>
                    <p className="text-white text-left">
                    Phone: +1 (904) 803-1857
                    <br></br>
                    Email: hr@jaysoftconsulting.com
                    </p>
                </div>
            </div>
        </footer>    
    )
}

export default Footer
