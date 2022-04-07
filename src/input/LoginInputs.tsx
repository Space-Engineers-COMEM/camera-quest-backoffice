/* eslint-disable max-classes-per-file */
import React from 'react';

interface Props {
  setValidation: any;
}

interface State {
  value: string;
  error: string;
}

export class MailInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '', error: '' };
    this.handleMailChange = this.handleMailChange.bind(this);
  }

  handleMailChange(e: any) {
    this.setState({ value: e.target.value });
    this.validateMail(e.target.value);
  }

  validateMail(mail: string) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(mail)) {
      this.setState({ error: '' });
      this.props.setValidation(true);
    } else if (mail.length === 0) {
      this.setState({ error: "Merci d'entrer une adresse e-mail." });
      this.props.setValidation(false);
    } else {
      this.setState({ error: "L'adresse e-mail n'est pas valide." });
      this.props.setValidation(false);
    }
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="mail">
          <span>E-mail</span>
          <input
            id="mail"
            name="mail"
            type="mail"
            value={this.state.value}
            onChange={this.handleMailChange}
          />
        </label>
        {this.state.error === '' ? '' : <span className="error">{this.state.error}</span>}
      </fieldset>
    );
  }
}

export class PswInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '', error: '' };
    this.handlePswChange = this.handlePswChange.bind(this);
  }

  handlePswChange(e: any): void {
    this.setState({ value: e.target.value });
    this.props.setValidation(this.validatePsw(e.target.value));
  }

  validatePsw(psw: string) {
    if (psw.length < 4) {
      this.setState({ error: 'too short' });
      return false;
    }
    if (psw.length > 10) {
      this.setState({ error: 'too long' });
      return false;
    }
    this.setState({ error: '' });
    return true;
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="psw">
          <span>Mot de passe</span>
          <input
            id="psw"
            name="psw"
            type="password"
            value={this.state.value}
            onChange={this.handlePswChange}
          />
        </label>
        {this.state.error === '' ? '' : <span className="error">{this.state.error}</span>}
      </fieldset>
    );
  }
}
