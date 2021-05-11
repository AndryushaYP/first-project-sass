import "./Form.scss";

function Form() {
  return (
    <form className="form">
      <h2 className="form__title">Электронная почта</h2>
      <label className="form__label">
        <input placeholder="Ваша электронная почта" className="form__input" />
        <button className="form__button"></button>
      </label>
      <p className="form__description">
        Подписываясь, вы принимаете <span className="form__description-span">правила сервиса</span>
      </p>
    </form>
  );
}

export default Form;
