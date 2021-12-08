import "./styles/About.css";
import RLP from "../imgs/RLP.png";

const About = () => {
  return (
    <div className="about" id="about">

      <img src={RLP} className="RLP" alt="Ricardo Leitão Pedro"/>

      <article className="about__text">
        <p className="about__title">ABOUT ME</p>
        <p>
          I am a classical musican by formation but developed a passion for
          coding while in lockdown during the first wave of the 2020 global
          pandemic.<br />
          <br />
          I discovered that the art of programming has many parallels to
          the musical craft I was used to, while allowing me to expand my
          knowledge of today's state-of-the-art technology and develop the
          skills to build attractive products from the ground up.<br />
          <br />
          After a period of self-learning, I succefully applied and graduated
          from possibly the thoughest programming bootcamp in the world(!):<br/>
          <p style={{textAlign: "center", marginTop: "0.8rem"}}>
            <a href="https://salt.study/" target="_blank" rel="noreferrer" className="salt-link">(&lt;/salt&gt;)</a>'s Javascript Full-stack course.
          </p>
          Since then, I work as a professional programmer for the web.
        </p>
      </article>
      
      <div className="tech">

        <p className="tech__title">TECH STACK</p>
        <p className="tech__languages-title">languages:</p>
        <p className="tech__languages">JavaScript, TypeScript, Python</p>
        <article className="tech__text">
          <div className="tech__frontend">
            <p className="tech__frontend-title">front-end</p>
            <div className="tech__frontend-list">
              <span className="tech__frontend-list-item">React</span><br/>
              <span className="tech__frontend-list-item">Redux</span><br/>
              <span className="tech__frontend-list-item">HTML5</span><br/>
              <span className="tech__frontend-list-item">CSS3, SASS</span>
            </div>
          </div>

          <div className="tech__backend">
            <p className="tech__backend-title">back-end</p>
            <div className="tech__backend-list">
              <span className="tech__frontend-list-item">NodeJS</span><br/>
              <span className="tech__frontend-list-item">ExpressJS</span><br/>
              <span className="tech__frontend-list-item">REST api's</span><br/>
              <span className="tech__frontend-list-item">GraphQL</span><br/>
              <span className="tech__frontend-list-item">MongoDB, Mongoose</span><br/>
              <span className="tech__frontend-list-item">SQL, PostGreSQL</span>
            </div>
          </div>
        </article>

        <div className="tech__tools">
          <p className="tech__tools-title">tools and skills</p>
          <span>GIT, GitHub</span><br/>
          <span>Test-driven development</span><br/>
          <span>Agile</span>
        </div>
        
      </div>

    </div>
  );
};

export default About;
