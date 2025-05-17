import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialFeed from './components/SocialFeed';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Gallery />
        <SocialFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 