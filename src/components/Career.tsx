import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc Computer Science</h4>
                <h5>BITS Pilani</h5>
              </div>
              <h3>2024–27</h3>
            </div>
            <p>
              Pursuing Bachelor of Science in Computer Science at Birla Institute
              of Technology and Science, Pilani. Focused on full-stack web
              development, AI/ML, and building real-world applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Projects</h4>
                <h5>Self-Directed</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              Building production-grade applications — RAG-based document
              assistants, persona-based AI chatbots, and enterprise backend
              systems with Spring Boot. Hands-on with React, Node.js, Express,
              MongoDB, and cloud deployment on Render and Vercel.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Exploration</h4>
                <h5>Continuous Learning</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Exploring RAG pipelines, LLM integration, vector databases,
              supervised learning, and prompt engineering. Building practical AI
              tools that solve real problems using LangChain, Groq, Gemini API,
              and Qdrant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
