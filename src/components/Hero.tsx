import * as React from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Picture from '../assets/IMG-20250207-WA0045.jpg';

// ── Typing animation hook ──────────────────────────────────────────────────
const roles = [
  'Full-Stack Developer',
  'Full-Stack Builder',
  'Biochemist turned Coder',
  'React Specialist',
];

const useTypingEffect = () => {
  const [text, setText] = React.useState('');
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 45 : 95;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return text;
};

// ── Floating orb config ────────────────────────────────────────────────────
const orbs = [
  { color: '#bd93f9', size: 420, top: '-10%', left: '-8%',  duration: 9,  delay: 0 },
  { color: '#ff79c6', size: 320, top: '5%',   right: '-5%', duration: 13, delay: 1.5 },
  { color: '#8be9fd', size: 260, bottom: '0%', left: '40%', duration: 11, delay: 3 },
  { color: '#50fa7b', size: 180, top: '55%',  left: '-3%',  duration: 15, delay: 2 },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const Hero = () => {
  const typedText = useTypingEffect();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: 'calc(100vh - 64px)', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 4, md: 0 },
        pb: { xs: 6, md: 0 },
      }}
    >
      {/* ── Floating Orbs Background ── */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -28, 0], x: [0, 14, 0], scale: [1, 1.06, 1] }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: orb.color,
            filter: 'blur(90px)',
            opacity: 0.12,
            top: orb.top,
            left: (orb as { left?: string }).left,
            right: (orb as { right?: string }).right,
            bottom: (orb as { bottom?: string }).bottom,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">

          {/* ── Left Content ── */}
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <Stack spacing={3}>
                {/* Location tag */}
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: 700, letterSpacing: 3 }}
                  >
                    FULL-STACK ENGINEER • NIGERIA
                  </Typography>
                </motion.div>

                {/* Name */}
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: { xs: '2.6rem', md: '4.2rem' }, lineHeight: 1.1 }}
                  >
                    Hi, I'm{' '}
                    <Box
                      component="span"
                      sx={{
                        color: 'primary.main',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -4,
                          left: 0,
                          width: '100%',
                          height: 3,
                          bgcolor: 'secondary.main',
                          borderRadius: 2,
                        },
                      }}
                    >
                      Shreda
                    </Box>
                    .
                  </Typography>
                </motion.div>

                {/* Typing Role */}
                <motion.div variants={fadeInUp}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minHeight: 40 }}>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      sx={{ fontWeight: 500 }}
                    >
                      I build as a{' '}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="secondary.main"
                      sx={{ fontWeight: 700 }}
                    >
                      {typedText}
                    </Typography>
                    {/* Blinking cursor */}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      style={{
                        display: 'inline-block',
                        width: 2,
                        height: '1.2em',
                        background: '#ff79c6',
                        borderRadius: 2,
                        verticalAlign: 'middle',
                        marginLeft: 2,
                      }}
                    />
                  </Box>
                </motion.div>

                {/* Description */}
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: 500, lineHeight: 1.8 }}
                  >
                    A Biochemistry graduate turned developer — building scalable, performant, and
                    visually polished web applications using{' '}
                    <Box component="span" color="primary.main" fontWeight={600}>React</Box> and
                    modern design systems.
                  </Typography>
                </motion.div>

                {/* CTAs */}
                <motion.div variants={fadeInUp}>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{
                        px: 4, py: 1.5,
                        background: 'linear-gradient(135deg, #bd93f9 0%, #ff79c6 100%)',
                        color: '#fff',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #a875f7 0%, #ff5faf 100%)',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 28px rgba(189,147,249,0.4)',
                        },
                      }}
                    >
                      View Projects
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{
                        px: 4, py: 1.5,
                        borderColor: 'rgba(189,147,249,0.5)',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.main',
                          bgcolor: 'rgba(189,147,249,0.08)',
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      Contact Me
                    </Button>
                  </Stack>
                </motion.div>
              </Stack>
            </Box>
          </Grid>

          {/* ── Right: Profile Image ── */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Glow ring */}
                <Box
                  sx={{
                    position: 'relative',
                    width: 380,
                    height: 380,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -6,
                      borderRadius: '38% 62% 55% 45% / 45% 38% 62% 55%',
                      background: 'linear-gradient(135deg, #bd93f9, #ff79c6, #8be9fd)',
                      zIndex: 0,
                      animation: 'morphBorder 8s ease-in-out infinite',
                    },
                    '@keyframes morphBorder': {
                      '0%, 100%': { borderRadius: '38% 62% 55% 45% / 45% 38% 62% 55%' },
                      '33%': { borderRadius: '55% 45% 38% 62% / 62% 55% 45% 38%' },
                      '66%': { borderRadius: '45% 55% 62% 38% / 38% 62% 55% 45%' },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      width: '100%',
                      height: '100%',
                      borderRadius: '38% 62% 55% 45% / 45% 38% 62% 55%',
                      overflow: 'hidden',
                      animation: 'morphBorder 8s ease-in-out infinite',
                    }}
                  >
                    <Box
                      component="img"
                      src={Picture}
                      alt="Shreda profile"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll down hint */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { md: '-10vh' },
            left: '50%',
            transform: 'translateX(-50%)',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 2, textTransform: 'uppercase' }}>
            scroll
          </Typography>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Box
              sx={{
                width: 24, height: 38, borderRadius: 12,
                border: '2px solid',
                borderColor: 'rgba(189,147,249,0.4)',
                display: 'flex', justifyContent: 'center', pt: 0.8,
              }}
            >
              <Box
                sx={{
                  width: 4, height: 8, borderRadius: 2,
                  bgcolor: 'primary.main',
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
