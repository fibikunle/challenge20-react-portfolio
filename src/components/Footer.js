// Imports svg files for social media images
import svgGitHub from "../images/github.svg";
import svgLinkedIn from "../images/linkedin.svg";

// Creates a footer element with a link to Ibikunle femi social media profiles.
export default function Footer() {
  return (
    <footer>
      <h4>
        &copy; 2023&nbsp;
        <a href="#" target="_blank" rel="noreferrer">
          Femi web Solutions
        </a>
      </h4>
      <div className="socialMedia">
        <a
          href="https://github.com/fibikunle/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={svgGitHub} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/femi-ibikunle-a5096019b"
          target="_blank"
          rel="noreferrer"
        >
          <img src={svgLinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}
