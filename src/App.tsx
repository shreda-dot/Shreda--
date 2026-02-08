import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/MuiTheme';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Project';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    
    </ThemeProvider>
  );
}

export default App;