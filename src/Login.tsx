/* eslint-disable max-classes-per-file */
import React from 'react';
import { MailInput, PswInput } from './input/LoginInputs';

interface Props {}

interface State {
  validMail: boolean;
  validPsw: boolean;
  errorMsg: string;
}

export default class Login extends React.Component<Props, State> {
  constructor(props: never) {
    super(props);
    this.state = { validMail: false, validPsw: false, errorMsg: '' };
    this.setEmailValidation = this.setEmailValidation.bind(this);
    this.setPswValidation = this.setPswValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt: any) {
    evt.preventDefault();
    if (this.state.validMail && this.state.validPsw) {
      // Static for dev purpose
      this.postCredentials('noemail@noemail.ch', 'password');
    } else {
      this.setState({ errorMsg: 'Merci de remplir tous les champs.' });
    }
  }

  setEmailValidation(valid: boolean): void {
    this.setState({ validMail: valid });
  }

  setPswValidation(valid: boolean): void {
    this.setState({ validPsw: valid });
  }

  postCredentials(mail: string, psw: string) {
    const apiUrl = 'http://127.0.0.1:3333/login';
    const init = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ email: mail, password: psw }),
    };

    console.log(init.body);

    fetch(apiUrl, init)
      .then((res) => res.json())
      .then((res) => {
        if (res.type === 'error') {
          this.setState({ errorMsg: res.content });
        } else {
          localStorage.setItem('token', res.token);
          this.context.router.push('/');
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello World</h1>
        <small>{this.state.errorMsg || ''}</small>
        <MailInput setValidation={this.setEmailValidation} />
        <PswInput setValidation={this.setPswValidation} />
        <input type="submit" value="Login" />
      </form>
    );
  }
}
