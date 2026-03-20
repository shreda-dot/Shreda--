import * as React from 'react';
import {
  AppBar, Box, Toolbar, Button, Container,
  Stack, IconButton, Tooltip, useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorMode } from '../context/ThemeContext';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home',       id: 'home' },
  { label: 'About',      id: 'about' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact',    id: 'contact' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const { mode, toggleColorMode } = useColorMode();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  // ── Scroll-spy via IntersectionObserver ──────────────────────────────────
  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-35% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'background.paper' : 'transparent',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'divider' : 'transparent',
          transition: 'background-color 0.4s ease, border-color 0.4s ease',
          backgroundImage: 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ minHeight: { xs: 64, md: scrolled ? 60 : 76 }, transition: 'min-height 0.3s' }}
          >
            {/* Logo */}
            <Box
              component="button"
              onClick={() => scrollTo('home')}
              sx={{
                display: 'flex', alignItems: 'center',
                p: 0.6, borderRadius: 2, border: '1px solid',
                borderColor: 'rgba(189,147,249,0.35)',
                bgcolor: 'rgba(189,147,249,0.06)',
                cursor: 'pointer', transition: 'all 0.25s',
                background: 'none',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'rgba(189,147,249,0.14)',
                  transform: 'scale(1.06)',
                },
              }}
            >
              <Box component="img" src={logo} alt="Shreda" sx={{ height: 38, width: 'auto' }} />
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Nav with sliding pill */}
            <Stack
              direction="row"
              spacing={0}
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              {navItems.map((item) => (
                <Box key={item.id} sx={{ position: 'relative' }}>
                  {/* Sliding active pill */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 10,
                        background: 'rgba(189,147,249,0.13)',
                        border: '1px solid rgba(189,147,249,0.28)',
                      }}
                    />
                  )}
                  <Button
                    onClick={() => scrollTo(item.id)}
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      color: activeSection === item.id ? 'primary.main' : 'text.secondary',
                      fontWeight: activeSection === item.id ? 700 : 500,
                      fontSize: '0.88rem',
                      px: 2,
                      py: 0.9,
                      minWidth: 0,
                      transition: 'color 0.2s',
                      '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                    }}
                  >
                    {item.label}
                  </Button>
                </Box>
              ))}

              {/* Theme Toggle */}
              <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'} arrow>
                <IconButton
                  onClick={toggleColorMode}
                  size="small"
                  sx={{
                    ml: 1.5,
                    color: 'primary.main',
                    border: '1px solid rgba(189,147,249,0.35)',
                    bgcolor: 'rgba(189,147,249,0.06)',
                    transition: 'all 0.25s',
                    '&:hover': { bgcolor: 'rgba(189,147,249,0.16)', borderColor: 'primary.main' },
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={mode}
                      initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                    </motion.div>
                  </AnimatePresence>
                </IconButton>
              </Tooltip>
            </Stack>

            {/* Mobile Controls */}
            <Stack
              direction="row" spacing={1}
              sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}
            >
              <IconButton onClick={toggleColorMode} size="small" sx={{ color: 'primary.main' }}>
                {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
              <IconButton
                onClick={() => setMobileOpen((p) => !p)}
                sx={{
                  color: 'text.primary', p: 1.2,
                  bgcolor: 'rgba(189,147,249,0.06)', borderRadius: '10px',
                  border: '1px solid rgba(189,147,249,0.2)', transition: '0.2s',
                  '&:active': { transform: 'scale(0.9)' },
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 0.55 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 1200 }}
            />
            <motion.div
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 140, damping: 22 }}
              style={{
                position: 'fixed', bottom: 0, left: 0, right: 0,
                zIndex: 1300, borderTopLeftRadius: 28, borderTopRightRadius: 28,
                boxShadow: '0 -20px 60px rgba(189,147,249,0.3)',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ bgcolor: 'background.paper', p: 2.5, pb: 4 }}>
                <Box
                  sx={{
                    width: 40, height: 4, bgcolor: 'divider',
                    borderRadius: 2, mx: 'auto', mb: 3,
                  }}
                />
                <Stack spacing={1}>
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Button
                        fullWidth
                        onClick={() => { scrollTo(item.id); setMobileOpen(false); }}
                        sx={{
                          justifyContent: 'flex-start',
                          px: 2.5, py: 1.4, borderRadius: 2,
                          color: activeSection === item.id ? 'primary.main' : 'text.primary',
                          fontWeight: activeSection === item.id ? 700 : 500,
                          fontSize: '1rem',
                          bgcolor: activeSection === item.id
                            ? 'rgba(189,147,249,0.12)'
                            : 'rgba(189,147,249,0.04)',
                          '&:hover': { bgcolor: 'rgba(189,147,249,0.1)' },
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
