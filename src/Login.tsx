/* eslint-disable max-classes-per-file */
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MailInput, PswInput } from './input/LoginInputs';

export default function Login() {
  const [validMail, setEmailValidation] = useState(false);
  const [validPsw, setPswValidation] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const postCredentials = (mail: string, psw: string) => {
    const apiUrl = 'https://api.cameramuseum.app/login';
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

  // Redirect user if already logged in.
  const alreadyLoggedIn = () => {
    const token = localStorage.getItem('token');
    const url = 'https://api.cameramuseum.app/token';
    const init = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }),
    };

    fetch(url, init)
      .then((res) => res.json())
      .then((res) => {
        if (res.isLoggedIn) {
          navigate('/dashboard');
        }
      });
  };

  useEffect(() => alreadyLoggedIn);

  return (
    <div id="login">
      <img src="./img/logo.png" alt="Login" />
      <h1>Camera Museum</h1>
      <form onSubmit={handleSubmit}>
        <small>{errorMsg || ''}</small>
        <MailInput setValidation={setEmailValidation} />
        <PswInput setValidation={setPswValidation} />
        <input type="submit" value="Login" className="button button__login" />
      </form>
      <Link to="https://cameramuseum.app">
        <i className="fa-solid fa-angle-left" />
        Retour au site
      </Link>
    </div>
  );
}
