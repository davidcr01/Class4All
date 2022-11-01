import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import { MuiBreadcrumbs } from '../muibreadcrumbs';
import PantallasGestion from '../Layout/PantallasGestion';
export const Gestion = () => {
  return (
    <>
    <Header titulo="Gestión del centro"/>
    <MuiBreadcrumbs />
    <PantallasGestion/>
    <Footer/>
  </>)
};

//export default Gestion;
