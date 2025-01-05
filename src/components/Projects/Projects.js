import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quiz Contest"
              description="MERN Stack website: Created an online quiz platform with React.js,Socket.IO,and Firebase, supporting real-time interaction for 50+ users. Used MongoDB for scalable data storage,ensuring seamless performance during high-traffic periods."
              ghLink="https://github.com/BhaskarBMU/Quiz-Quest"
              demoLink="https://login-auth-54c3e.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="3DIFY"
              description="Developed a React.js website using the MERN stack to transform multilingual text into multi-view images and 3D models, improving accessibility and engagement.Built custom AI models for multilingual prompts, generating tailored 3D outputs based on user preferences to enhance
 interactivity."
              ghLink="https://github.com/BhaskarBMU"
              demoLink="https://3-d-model-generator-teal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sound Slice"
              description="Developed a Flutter application that separates audio files into vocals, bass, drums, and other components using a deep
 learning model trained on the MUSDB-18 dataset.Selected and fine-tuned the Hybrid Demucs Model for its superior SDR (8.6) and SIR (18.2), achieving 153% better SDR
 and 119% better SIR than the U-Net model, ensuring enhanced sound quality."
              ghLink="https://github.com/BhaskarBMU"
              // demoLink="https://3-d-model-generator-teal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Forgery Detector"
              description=" Optimized copy-move image forgery detection processes through the application
 of deep learning techniques, utilizing the CoMoFoD dataset.I had trained and tested multiple models which were Vanilla Convolutional Neural
 Network (CNN), MobileNet, VGG16 ,ResNet50, DenseNet121"
              ghLink="https://github.com/BhaskarBMU/Image-Forgery-Detection"
              demoLink="https://detectimageforgery.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
