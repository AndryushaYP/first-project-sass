import "./TypesSection.scss";

function TypesSection() {
  return (
    <section className="types-section">
      <ul className="cards">
        <h2 className="cards__item-title">
          <span className="cards__item-title-span">5 когнитивных искажений</span>
          <br /> о существовании которых стоит помнить
        </h2>
        <li className="cards__item">
          <p className="cards__number">1</p>
          <h3 className="cards__title">Эффект ИКЕА</h3>
          <p className="cards__description">
            Вы переоцениваете собственные решения, и, как следствие, недооцениваете решения других.
          </p>
        </li>
        <li className="cards__item">
          <p className="cards__number">2</p>
          <h3 className="cards__title">Преждевременная оптимизация</h3>
          <p className="cards__description">
            Вы оптимизируете что-то задолго до того, как в этом появляется необходимость.
          </p>
        </li>
        <li className="cards__item">
          <p className="cards__number">3</p>
          <h3 className="cards__title">Искажение новизны</h3>
          <p className="cards__description">
            Вы даёте более высокую оценку тем событиям, которые произошли недавно, и недооцениваете
            более старые.
          </p>
        </li>
        <li className="cards__item">
          <p className="cards__number">4</p>
          <h3 className="cards__title">Гиперболическое обесценивание</h3>
          <p className="cards__description">
            Вы гонитесь за немедленной маленькой выгодой и игнорируете более крупную, недоступную
            сейчас, но доступную в будущем.
          </p>
        </li>
        <li className="cards__item">
          <p className="cards__number">5</p>
          <h3 className="cards__title">Ошибка планирования</h3>
          <p className="cards__description">
            Неправильно рассчитывать время необходимое для завершения задачи.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default TypesSection;
