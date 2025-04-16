import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TowerControl as GameController, Users, Info, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gradient">Astrovia</a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/team">Team</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <a
                href="https://play.astrovia.xyz"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Play Game
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
            <a href="/about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
            <a href="/team" className="block px-3 py-2 text-gray-300 hover:text-white">Team</a>
            <a href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
            <a
              href="https://play.astrovia.xyz"
              className="block px-3 py-2 bg-primary text-white rounded-lg"
            >
              Play Game
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="relative min-h-screen hero-gradient flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Astrovia
          <span className="block text-2xl md:text-3xl text-gray-400 mt-2">
            A Puzzle Adventure
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Formerly known as Temporal Odyssey
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://play.astrovia.xyz"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <GameController size={24} />
            Play Game
          </a>
          <a
            href="#features"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  </div>
);

const Features = () => (
  <section id="features" className="py-20 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Box-Pushing Puzzles",
            description: "Master intricate box-pushing mechanics to solve challenging puzzles",
          },
          {
            title: "Stylized 3D Environment",
            description: "Explore beautifully crafted minimalistic 3D worlds",
          },
          {
            title: "Rich Narrative",
            description: "Uncover the mysterious story as you progress through levels",
          },
          {
            title: "Mind-Bending Mechanics",
            description: "Experience unique puzzle mechanics that will challenge your mind",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-20 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gradient mb-4">Astrovia</h3>
          <p className="text-gray-400">A mind-bending puzzle adventure game that challenges your perception.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="/team" className="text-gray-400 hover:text-white">Team</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 border-gray-700 rounded-lg px-4 py-2"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© 2025 Astrovia. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Contact />
  </>
);

const AboutPage = () => (
  <div className="pt-16">
    <div className="hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8">About Astrovia</h1>
          <p className="text-xl text-gray-300 mb-8">
            Embark on a mind-bending journey through space and time in this innovative puzzle adventure.
          </p>
        </motion.div>
      </div>
    </div>

    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">The Story</h2>
            <p className="text-gray-300 mb-4">
              In Astrovia, you play as a mysterious character who has awakened in a world where time and space intertwine. Navigate through carefully crafted puzzles, manipulate objects, and discover the secrets of this enigmatic universe.
            </p>
            <p className="text-gray-300">
              Each level presents unique challenges that will test your problem-solving skills and spatial awareness. As you progress, you'll uncover more about your character's past and the nature of the world around you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Gameplay</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Solve intricate box-pushing puzzles that challenge your spatial reasoning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Explore beautifully designed minimalist environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Uncover the story through environmental storytelling</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Experience unique mechanics that blend puzzle-solving with narrative</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Game Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
              alt="Puzzle Screenshot"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
              alt="Environment Screenshot"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

const TeamPage = () => (
  <div className="pt-16">
    <div className="hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8">Our Team</h1>
          <p className="text-xl text-gray-300 mb-8">
            Meet the passionate developers behind Astrovia
          </p>
        </motion.div>
      </div>
    </div>

    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Niraj</h3>
              <p className="text-primary">Game Developer</p>
            </div>
            <p className="text-gray-300 mb-4">
              With over 5 years of experience in game development, Niraj brings creativity and technical expertise to Astrovia. His passion for puzzle games and innovative mechanics drives the core gameplay experience.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Users size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Sam</h3>
              <p className="text-primary">Web3 Developer</p>
            </div>
            <p className="text-gray-300 mb-4">
              Sam specializes in creating seamless web experiences and implementing cutting-edge technologies. His expertise in web development ensures Astrovia runs smoothly across all platforms.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Users size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300">
            We believe in creating games that challenge players' minds while delivering an immersive and memorable experience. Our goal is to push the boundaries of puzzle game design and create experiences that stay with players long after they've completed the game.
          </p>
        </div>
      </div>
    </section>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;