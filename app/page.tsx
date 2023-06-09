import Image from 'next/image'
import "../styles/style.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Brands from '../components/Brands';
import BlueProductDescriptionComponent from '../components/BlueProductDescriptionComponent';
import WhiteProductDescriptionComponent from '../components/WhiteProductDescriptionComponent';
import WhatMakesUsDifferentComponent from '../components/WhatMakesUsDifferentComponent';
import HomePageWelcome from '../components/HomePageWelcome';
import IndustriesWorkedWithComponent from '../components/IndustriesWorkedWithComponent';
import FAQComponent from '../components/FAQComponent';
import RequestAQuoteComponent from '../components/RequestAQuoteComponent';
import TestComponent from '../components/TestComponent';
import '../styles/fonts.css';

// Rest of your component code



export default function Home() {
  return (
    <div className="container overflow-x-hidden">
      <Navbar /> 
      <HomePageWelcome/>
      {/* <TestComponent/> */}
      <Brands/>
      <BlueProductDescriptionComponent/>
      <WhiteProductDescriptionComponent/>
      <WhatMakesUsDifferentComponent/>
      <IndustriesWorkedWithComponent/>
      <FAQComponent/>
      <RequestAQuoteComponent/>
      <Footer/>
    </div>
  )
}
