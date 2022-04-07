/* eslint-disable max-classes-per-file */
import React from 'react';
import { MailInput, PswInput } from './input/LoginInputs';

interface Props {}

interface State {
  validMail: boolean;
  validPsw: boolean;
}

export default class Login extends React.Component<Props, State> {
  constructor(props: never) {
    super(props);
    this.state = { validMail: false, validPsw: false };
    this.setEmailValidation = this.setEmailValidation.bind(this);
    this.setPswValidation = this.setPswValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt: any) {
    evt.preventDefault();
    console.log(this.state.validMail && this.state.validPsw ? 'submiting' : 'no no no');
  }

  setEmailValidation(valid: boolean): void {
    this.setState({ validMail: valid });
  }

  setPswValidation(valid: boolean): void {
    this.setState({ validPsw: valid });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello World</h1>
        <MailInput setValidation={this.setEmailValidation} />
        <PswInput setValidation={this.setPswValidation} />
        <input type="submit" value="Login" />
      </form>
    );
  }
}
