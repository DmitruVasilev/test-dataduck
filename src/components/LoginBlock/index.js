import React from "react";
import LoginForm from "../LoginForm";
import "./LoginBlock.sass";

const LoginBlock = () => {
  return (
    <section className="login-block">
      <h1 className="login-block__caption">Начните тороговать прямо сейчас</h1>
      <ul className="login-block__list">
        <li className="login-block__item">Нет спреда — торгуйте с прозрачными и точными котировками</li>
        <li className="login-block__item">Достаточно депозита в $10, чтобы начать торговать</li>
      </ul>
      <LoginForm />
    </section>
  );
};

export default LoginBlock;
