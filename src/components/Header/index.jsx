import { Container } from "./styles";
import picturetwo from "../../assets/picturetwo.png";
import linkedin from "../../assets/icons/linkedin-icon.svg";
import github from "../../assets/icons/github-icon.svg";
import mail from "../../assets/icons/mail-icon.svg";
import phone from "../../assets/icons/phone-icon.svg";
import arrow from "../../assets/icons/arrow-icon.svg";

export default function Header() {
  return (
    <Container id="#">
      <div className="photoSide">
        <img src={picturetwo} alt="Gabriel picture" />
      </div>

      <div className="infoSide">
        <h1>Gabriel Vieira Albuquerque</h1>
        <h3>Full-stack Developer</h3>
        <span>💻 Apaixonado por tecnologia</span>
        <span>🌍 Dourados, MS - Brasil</span>
        <span>🎓 Sistemas de Informação</span>

        <div className="infoImg">
          <a
            href="https://www.linkedin.com/in/gabrielvieira30/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin icon" />
          </a>
          <a
            href="https://github.com/igabrielvieira"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github icon" />
          </a>
          <a href="mailto:gabrielvieira2478@gmail.com">
            <img src={mail} alt="Mail icon" />
          </a>
          <a
            href="https://wa.me/5567998873502"
            target="_blank"
            rel="noreferrer"
          >
            <img src={phone} alt="Phone icon" />
          </a>
        </div>
      </div>

      <a className="upNow" href="#">
        <img src={arrow} alt="Seta" />
      </a>
    </Container>
  );
}
