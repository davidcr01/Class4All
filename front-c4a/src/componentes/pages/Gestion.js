import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import PantallasGestion from '../Layout/PantallasGestion';
const Gestion = () => {
  return (
    <>
    <Header titulo="Gestión del centro"/>
    <PantallasGestion/>
    <Footer/>
  </>)
};

export default Gestion;
