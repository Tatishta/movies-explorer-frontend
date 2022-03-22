import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__block">
        <p className="footer__copyright">© 2022</p>
        <nav>
        <ul className="footer__links">
          <li>
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://praktikum.yandex.ru">Яндекс.Практикум</a>
          </li>
          <li>
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Tatishta">Github</a>
          </li>
          <li>
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/ttanyachernyshova">Facebook</a>
          </li>
        </ul>
      </nav>

      </div>

    </footer>
  );
}

export default Footer;
