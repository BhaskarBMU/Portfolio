import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhaskar Agarwal </span>
            from <span className="purple"> Prayagraj, UttarPradesh.</span>
            <br />
            I am currently looking for SDE/Dev/Data Science internships.
            <br />
            I am in my final year of CSE from BML Munjal University.
            <br />
            <br />
            Check out my leetcode Profile while you are here!
            <a href="https://leetcode.com/u/Bhaskar_Agarwal_BMU/" style={{ textDecoration: "none", color: "purple" }}>
            <br />
            <SiLeetcode />  Leetcode Profile</a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
