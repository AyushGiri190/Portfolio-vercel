import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sehatsathi from "../../Assets/Projects/sehatsathi.png";
import chatpdf from "../../Assets/Projects/chat_with_pdf.webp";
import facemask from "../../Assets/Projects/face_mask.webp";
import breast from "../../Assets/Projects/breast.jpg";
import house from  "../../Assets/Projects/house_price.jpg";
import video from "../../Assets/Projects/sehatsathi.mp4";
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
              imgPath={sehatsathi}
              isBlog={false}
              title="Sehat Sathi"
              description="This project provides a web platform for preliminary disease identification by analyzing symptoms and comparing X-ray images from a categorized database. Users can explore potential causes based on their symptoms, but it emphasizes that medical consultation with a licensed professional is essential for a proper diagnosis"
              ghLink="https://github.com/AyushGiri190/Sehat-Sathi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatpdf}
              isBlog={false}
              title="Chat With Pdf"
              description = "This project leverages the LLaMA 3 model and Retrieval-Augmented Generation (RAG) to enable document-specific interaction. By uploading a PDF, users can ask questions and receive responses based on the content, providing a powerful way to query and extract insights from the document."
              ghLink="https://github.com/AyushGiri190/Chat-with-pdf"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facemask}
              isBlog={false}
              title="Face Mask Detector"
              description="This project detects whether a person is wearing a face mask using computer vision techniques. It helps prevent the spread of airborne diseases by identifying compliance with mask-wearing protocols in real-time, ensuring a safer environment in public spaces."
              ghLink="https://github.com/AyushGiri190/Face-Mask-Detection"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breast}
              isBlog={false}
              title="Breast Cancer Detection"
              description="This project focuses on early-stage breast cancer detection using advanced machine learning models. It offers exceptional accuracy in analyzing medical images, aiding in timely diagnosis and improving the chances of successful treatment and patient outcomes."
              ghLink="https://github.com/AyushGiri190/Breast-Cancer-Detection"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="House Price predictor"
              description="This project predicts house prices in Bengaluru using a regression model. By analyzing factors like location, size, and amenities, it provides accurate price estimates, helping buyers and sellers make informed decisions in the real estate market."
              ghLink="https://github.com/AyushGiri190/House-Price-Prediction"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
