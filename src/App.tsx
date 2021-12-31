import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingBox from './components/LandingBox/LandingBox';
import { FaArrowCircleDown } from 'react-icons/fa';
import ProjectsBox from './components/ProjectsBox/ProjectsBox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingBox />
      <FaArrowCircleDown className='mt-6 mx-auto scale-150' />
      <ProjectsBox />
    </div>
  );
}

export default App;
