import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import compose from "../../utils";
import withEmailStoreService from "../hoc";
import {fetchEmails, emailAdd} from "../../actions";

import "./LoginForm.sass";

class LoginForm extends React.Component {
  static defaultProps = {
    fetchEmails: PropTypes.func.isRequired,
    emailAddToList: PropTypes.func.isRequired,
    emails: PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.state = {
      email: " ",
      password: " ",
      checkbox: false,
      selectedCurrency: "currency--P",
      emailError: "",
      passwordError: "",
      checkboxError: "",
      emailCopyError: "",
      emailValid: false,
      passwordValid: false,
    };
    this.maxId = 100;
  }

  componentDidMount() {
    this.props.fetchEmails();
  }

  handleUserInput = (e) => {
    const {name, checked, type, value} = e.target;
    if (type === "checkbox") {
      this.setState({[name]: checked});
    } else {
      this.setState({[name]: value});
    }
  };

  sentData = () => {
    const {email, password, selectedCurrency, emailValid, passwordValid, checkbox} = this.state;
    const validCheckbox = this.validateCheckbox(checkbox);
    const validatEmailCopy = this.validateEmailCopy(email);
    if (emailValid && passwordValid && validCheckbox && validatEmailCopy) {
      this.props.emailAddToList({id: ++this.maxId, email, currency: selectedCurrency, password});
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.validateEmail(email);
    this.validatePassword(password);
    this.sentData();
  };

  validateEmailCopy = (value) => {
    const emailCopy = this.props.emails.find((data) => data.email === value);
    if (!!emailCopy) {
      this.setState({emailCopyError: "Учётная запись с указанным e-mail уже существует"});
      return false;
    } else {
      this.setState({emailCopyError: ""});
      return true;
    }
  };

  validateEmail = (value) => {
    const emailValid = !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return emailValid
      ? this.setState({emailError: "", emailValid: true})
      : this.setState({emailError: "Неверный email", emailValid: false});
  };

  validatePassword = (value) => {
    const passwordValid = value.length >= 4;
    return passwordValid
      ? this.setState({passwordError: "", passwordValid: true})
      : this.setState({passwordError: "Неверный пароль", passwordValid: false});
  };

  validateCheckbox = (value) => {
    value ? this.setState({checkboxError: ""}) : this.setState({checkboxError: "Примите соглашение об оказании услуг"});
    return value;
  };

  resetError = () => {
    this.setState({emailError: "", passwordError: "", checkboxError: ""});
  };

  render() {
    const {
      email,
      password,
      checkbox,
      selectedCurrency,
      emailError,
      passwordError,
      checkboxError,
      emailCopyError,
    } = this.state;

    const errorMessage = (title) => {
      if (title) {
        return (
          <div className="login-form__error-wrap">
            <span className="login-form__error">{title}</span>
          </div>
        );
      }
      return null;
    };

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <label className="login-form__input-label" htmlFor="email">
          <input
            onFocus={this.resetError}
            className={classNames("login-form__input", {"login-form__input--success": email})}
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleUserInput}
          />
          <span className={classNames("login-form__placeholder", {"login-form__placeholder--small": email})}>
            Ваш e-mail
          </span>
          {errorMessage(emailError)}
        </label>
        <label className="login-form__input-label" htmlFor="password">
          <input
            onFocus={this.resetError}
            className={classNames("login-form__input", {"login-form__input--success": password})}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleUserInput}
          />
          <span className={classNames("login-form__placeholder", {"login-form__placeholder--small": password})}>
            Придумайте пароль
          </span>
          {errorMessage(passwordError)}
        </label>
        <div className="login-form__radio-block">
          <span className="login-form__title">Валюта для ввода и вывода средств</span>
          <label className="login-form__radio-label" htmlFor="radio--P">
            <span
              className={classNames("login-form__radio-btn login-form__radio-btn--border-left", {
                "login-form__radio-btn--active": selectedCurrency === "currency--P",
              })}
            >
              P
            </span>
            <input
              className="login-form__input-radio"
              name="selectedCurrency"
              id="radio--P"
              type="radio"
              value="currency--P"
              checked={selectedCurrency === "currency--P"}
              onChange={this.handleUserInput}
            />
          </label>
          <label className="login-form__radio-label" htmlFor="radio--S">
            <span
              className={classNames("login-form__radio-btn", {
                "login-form__radio-btn--active": selectedCurrency === "currency--S",
              })}
            >
              S
            </span>
            <input
              className="login-form__input-radio"
              name="selectedCurrency"
              id="radio--S"
              type="radio"
              value="currency--S"
              checked={selectedCurrency === "currency--S"}
              onChange={this.handleUserInput}
            />
          </label>
          <label className="login-form__radio-label" htmlFor="radio--E">
            <span
              className={classNames(
                "login-form__radio-btn login-form__radio-btn--border-right login-form__radio-btn--no-after",
                {"login-form__radio-btn--active": selectedCurrency === "currency--E"},
              )}
            >
              E
            </span>
            <input
              className="login-form__input-radio"
              name="selectedCurrency"
              id="radio--E"
              type="radio"
              value="currency--E"
              checked={selectedCurrency === "currency--E"}
              onChange={this.handleUserInput}
            />
          </label>
        </div>
        <label className="login-form__checkbox-label" htmlFor="checkbox">
          <span className={classNames("login-form__checkbox", {"login-form__checkbox--active": checkbox})} />
          <input
            className="login-form__checkbox-input"
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={checkbox}
            onChange={this.handleUserInput}
          />
          <span className="login-form__checkbox-title">
            Я совершеннолетний, ознакомился и принимаю соглашение об оказании услуг.
          </span>
          {errorMessage(checkboxError)}
        </label>
        {emailCopyError && <div className="login-form__email-error">{emailCopyError}</div>}
        <button className="login-form__submit" type="submit">
          Зарегистрироваться
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({emailList: {emails, loading, error}}) => {
  return {emails, loading, error};
};

const mapDispatchToProps = (dispatch, {emailStoreService}) => {
  return bindActionCreators(
    {
      fetchEmails: fetchEmails(emailStoreService),
      emailAddToList: emailAdd,
    },
    dispatch,
  );
};

export default compose(
  withEmailStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginForm);
