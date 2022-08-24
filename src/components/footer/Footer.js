import "./footer.css";
import { FaAngleUp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "../home/homestyle.css";

const Footer = () => {
  return (
    <div className="container-footer-page">
      <button
        className="button-up"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <FaAngleUp size={42} />
      </button>

      <div className="container-footer">
        <div className="icon-container">
          <a
            href="https://github.com/hnunezo"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGit size={50} className="icon-link" />
          </a>
          <a
            href="https://www.linkedin.com/in/hector-nuñez-oviedo-a054171a7/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin size={50} className="icon-link" />
          </a>
          <a
            href="https://www.instagram.com/pechohot/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaInstagram size={50} className="icon-link" />
          </a>
          <a
            href="mailto: hector.nunez.oviedo@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaEnvelope size={50} className="icon-link" />
          </a>
        </div>

        <h2 className="lead">@HéctorNúñez</h2>
      </div>
    </div>
  );
};

export default Footer;
