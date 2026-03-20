import * as React from 'react';
import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';
import { AppThemeProvider } from './context/ThemeContext';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import Projects from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';

// ── Scroll Progress Bar ────────────────────────────────────────────────────
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, #bd93f9 0%, #ff79c6 50%, #8be9fd 100%)',
        transformOrigin: '0%',
        zIndex: 9999,
      }}
    />
  );
};

// ── Page Load Curtain ──────────────────────────────────────────────────────
const PageLoader = () => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{}}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'linear-gradient(135deg, #282a36 0%, #44475a 100%)',
            zIndex: 99999,
            transformOrigin: 'top',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 1, scale: 0.9 }}
            animate={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textAlign: 'center' }}
          >
            <motion.p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#bd93f9',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              WELCOME TO SHREDA WORLD
              <span style={{ color: '#ff79c6' }}>.</span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ── App ────────────────────────────────────────────────────────────────────
function App() {
  return (
    <AppThemeProvider>
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <AboutPage />
        <SkillsPage />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </AppThemeProvider>
  );
}

export default App;
