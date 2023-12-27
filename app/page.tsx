import Image from 'next/image';
import HeaderSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Carousel from './components/Carousel';
import Card from './components/Card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeaderSection />
        <AboutSection />
      </div>
    </main>
  )
}
