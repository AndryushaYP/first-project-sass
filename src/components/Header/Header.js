import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Когнитивные <br></br> искажения
      </h1>
      <h2 className="header__subtitle">в программировании</h2>
      <div className="header__image"></div>
      <div className="header__description">
        <p className="header__description-text">
          Мы, разработчики, часто сталкиваемся с проблемами, которые идут вразрез с нашей
          продуктивностью. Но мы часто игнорируем целостную картину. Некоторые из этих проблем
          малозаметны, некоторые существенны. Иногда с ними можно как-то справиться, а иногда, к
          сожалению, нет.
        </p>
        <p className="header__description-text">
          Вместе они формируют что-то вроде замкнутого цикла, и это может привести к длительной
          потере продуктивности, багам и бесконечному разочарованию. Если мы сможем минимизировать
          воздействие одного или нескольких из этих факторов, то сможем сломать и цикл, а остатки
          нейтрализовать.
        </p>
      </div>
      <button className="header__button">ПОДРОБНЕЕ</button>
    </header>
  );
}

export default Header;
