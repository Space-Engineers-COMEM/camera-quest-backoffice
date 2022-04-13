import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Error404 from './Error404';
import Login from './Login';
import Home from './Home';
import Pois from './Pois';
import PoiDetail from './input/poi/PoiDetail';

/* Is this still relevant ?

type Props = {};

type States = {
  lang: string;
  tutorialDone: boolean;
};
*/

export default function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  useEffect(() => {
    const lsLang = localStorage.getItem('lang');
    const lsTuto = localStorage.getItem('tutorialDone');
    localStorage.setItem('lang', !lsLang ? 'en' : lsLang);
    localStorage.setItem('tutorial-done', (lsTuto === 'true').toString());
  });

  return (
    <div className="App">
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/objets" element={<Pois />} />
        <Route path="/objets/:id" element={<PoiDetail />} />
        <Route path="/*" element={<Error404 />} />
        {/* <Route path="/:id" element={<POI />} /> */}
        {/* <Route path="/language" element={<Language />} /> */}
        {/* <Route path="/congrat" element={<Congrat />} /> */}
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/objets/:id" element={<PoiDetail />} />
        </Routes>
      )}
    </div>
  );
}
