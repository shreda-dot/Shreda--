import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/MuiTheme';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    
    </ThemeProvider>
  );
}

export default App;