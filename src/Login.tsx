/* eslint-disable max-classes-per-file */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailInput, PswInput } from './input/LoginInputs';

export default function Login() {
  const [validMail, setEmailValidation] = useState(false);
  const [validPsw, setPswValidation] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const postCredentials = (mail: string, psw: string) => {
    const apiUrl = 'http://127.0.0.1:3333/login';
    const init = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ email: mail, password: psw }),
    };

    fetch(apiUrl, init)
      .then((res) => res.json())
      .then((res) => {
        if (res.type === 'error') {
          setErrorMsg(res.content);
        } else {
          localStorage.setItem('token', res.token);
          navigate('/');
        }
      });
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    if (validMail && validPsw) {
      const { mail, psw } = evt.target;
      postCredentials(mail.value, psw.value);
    } else {
      setErrorMsg('Merci de remplir tous les champs.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hello World</h1>
      <small>{errorMsg || ''}</small>
      <MailInput setValidation={setEmailValidation} />
      <PswInput setValidation={setPswValidation} />
      <input type="submit" value="Login" />
    </form>
  );
}
