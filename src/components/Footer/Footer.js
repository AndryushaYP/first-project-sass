import "./Footer.scss";
import Form from "../Form/Form";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__form">
        <p className="footer__subscribe">
          Хотите узнать больше? <br></br> Подпишитесь на обновления
        </p>
        <Form />
      </div>
      <p className="footer__copyright">&copy; 2021 Константин Константинопольский</p>
      <p className="footer__copyright">
        По материалам статьи{" "}
        <a
          className="footer__link"
          href="https://hackernoon.com/cognitive-biases-in-programming-5e937707c27b"
        >
          Yash Ranadive Cognitive Biases in Programming
        </a>
      </p>
      <p className="footer__copyright">
        <a className="footer__link" href="https://ru.hexlet.io/">
          Курсы программирования Hexlet
        </a>
      </p>
    </footer>
  );
}

export default Footer;
