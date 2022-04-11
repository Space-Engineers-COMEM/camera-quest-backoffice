import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404 from './Error404';
import Login from './Login';
import Home from './Home';

interface Props {}

interface States {
  lang: string;
  tutorialDone: boolean;
}

export default class App extends React.Component<Props, States> {
  componentDidMount() {
    const lsLang = localStorage.getItem('lang');
    const lsTuto = localStorage.getItem('tutorialDone');
    localStorage.setItem('lang', !lsLang ? 'en' : lsLang);
    localStorage.setItem('tutorial-done', (lsTuto === 'true').toString());
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error404 />} />
          {/* <Route path="/:id" element={<POI />} /> */}
          {/* <Route path="/language" element={<Language />} /> */}
          {/* <Route path="/congrat" element={<Congrat />} /> */}
        </Routes>
      </div>
    );
  }
}
