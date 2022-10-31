import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import { MuiBreadcrumbs } from '../MuiBreadcrumbs';
import PantallasGestion from '../Layout/PantallasGestion';
const Gestion = () => {
  return (
    <>
    <MuiBreadcrumbs></MuiBreadcrumbs>
    <Header titulo="Gestión del centro"/>
    <PantallasGestion/>
    <Footer/>
  </>)
};

export default Gestion;
