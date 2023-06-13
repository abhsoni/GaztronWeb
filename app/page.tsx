import Image from 'next/image'
import "../styles/style.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Brands from '../components/Brands';
import BlueProductDescriptionComponent from '../components/BlueProductDescriptionComponent';
import WhiteProductDescriptionComponent from '../components/WhiteProductDescriptionComponent';
import WhatMakesUsDifferentComponent from '../components/WhatMakesUsDifferentComponent';
import HomePageWelcome from '../components/HomePageWelcome';
import '../styles/fonts.css';

// Rest of your component code



export default function Home() {
  return (
    <div className="container overflow-x-hidden">
      <Navbar /> 
      <HomePageWelcome/>
      <Brands/>
      <BlueProductDescriptionComponent/>
      <WhiteProductDescriptionComponent/>
      <WhatMakesUsDifferentComponent/>
      <Footer/>
    </div>
  )
}
