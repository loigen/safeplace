import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import React from 'react';
import {
  AboutPage,
  ContactPage,
  LandingPagesection,
  NotFoundpage,
} from '../pages/index';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Profile from '../components/Profile';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/LandingPage" replace />} /> {/* This line is problematic */}
        <Route path="/LandingPage" element={<LandingPagesection />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
