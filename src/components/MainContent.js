import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Overview from '../pages/Overview';
import Agents from '../pages/Agents';
import Alertes from '../pages/Alertes';
import Cartes from '../pages/Cartes';
import Stats from '../pages/Stats';
import Users from '../pages/Users';
import Garages from '../pages/Garages';

function MainContent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/users" element={<Users />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/Garages" element={<Garages />} />
        <Route path="/alertes" element={<Alertes />} />
        <Route path="/Cartes" element={<Cartes />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="*" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainContent;
