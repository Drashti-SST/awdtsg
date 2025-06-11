import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import { Button } from '@mui/material';

const App = () => {
  return (
    <>
      {/* Removed CDN links as they are handled in public/index.html and index.css */}
      <Login />
    </>
  );
}

export default App;
