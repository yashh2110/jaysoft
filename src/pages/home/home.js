import React from "react";
import { Container } from "react-bootstrap";
import '../../App.css';
import Carousel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";
import MainNav from "../../components/nav/nav";
import Work from "../../components/work/work";
const Home =()=>{
    return (
        <div className="App">
          <MainNav />
          <Carousel/>
          <Container className="quote mt-1 mb-1">
            <p className="pt-4"><b>“If you can DREAM it, you can DO it.”</b></p> 
            <p className="float-right pr-5 mr-5 ml-auto">– Walt Disney.</p>
          </Container>
          <Work/>
          <div className="about" id="about">
          <Container >
            <h2>About Us</h2>
            <p>“Knowledge is not skill, knowledge plus ten thousand times is skill” is what we believe. The team at Jay Soft has years of experience in the field of Information Technology which provide services to the clients seeking expertise in analysis, design, development, testing, deployment & support. We ensure the highest levels of quality, professionalism and satisfaction to our clients. Simply put, we have the best skill to support you in your journey.</p>
            <h4>Our Vision</h4>
            <p>We aspire to become the premier provider of IT services by exceeding our client’s expectations in delivering software according to their business needs.</p>
            <h4>Our Values</h4>
            <p><b>Teamwork, Quality, Honesty, Respect, Excellence</b></p>
            </Container>
          </div>
          <Footer />
      </div>
    )
}
export default Home;