import Image from 'next/image'
import "../styles/style.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/fonts.css';

// Rest of your component code



export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <Footer/>
    </div>
  )
}
