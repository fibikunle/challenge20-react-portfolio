// Import my picture
import headshot from "../../images/headshot.png";

// Builds the component to show my headshot and a short bio.
export default function Home() {
  return (
    <>
      <aside>
        <img src={headshot} alt="Ibikunle Oluwafemi" />
      </aside>
      <div className="sections">
        <section id="About">
          <h2>About Me</h2>

          <p
            className="aboutMe text"
            style={{
              paddingTop: "35px",
              fontSize: "20px",
            }}
          >
            Hi there, I'm Femi Ibikunle, and I am a Software Developer.
            <br />
            You are welcome to look around.
            <br />
            Email me at{" "}
            <a href="felixibikunle@gmail.com" style={{ fontStyle: "italics" }}>
              felixibikunle@gmail.com
            </a>
            <br />
          </p>
          <span>
            <a href="https://www.github.com/fibikunle">GitHub {"   "} </a>
          </span>
        </section>
        <br />
        <section>
          <div>
            <h3>My Background</h3>
            <p className="myBackgroundText">Over 12 years of experience in Technical Program Management, IT Quality Assurance (Manual/Automation), and Training (Agile Leadership/Agile Testing/Agile Project and Delivery Management). 
            Proven track record to deliver feature enhancements quickly, with high quality, high usability, security, high performance, and high ROI within budget estimations. Industries include Financial Services, Technology, Data Services, Real Estate, Telecommunications, Consulting and Education.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
