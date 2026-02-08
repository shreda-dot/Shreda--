import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Picture from '../assets/IMG-20250207-WA0045.jpg';

const Hero = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{ py: { xs: 10, md: 16 }, overflow: 'hidden' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <Stack spacing={3}>
                {/* Role */}
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: 700, letterSpacing: 2 }}
                  >
                    FRONTEND ENGINEER • LAGOS, NIGERIA
                  </Typography>
                </motion.div>

                {/* Name */}
                <motion.div variants={fadeInUp}>
                  <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
                    Hi, I’m <Box component="span" sx={{ color: '#2DD4BF' }}>Shreda</Box>.
                  </Typography>
                </motion.div>

                {/* Description */}
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 520, lineHeight: 1.6 }}
                  >
                    A Front-End Engineer with <strong>3+ years of experience</strong> creating scalable,
                    performant, and visually polished web applications using <strong>React</strong> and modern design systems.
                  </Typography>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={fadeInUp}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: 'none',
                        transition: 'all 0.3s',
                        '&:hover': { transform: 'translateY(-3px)' },
                      }}
                    >
                      View Projects
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: 'none',
                        transition: 'all 0.3s',
                        '&:hover': { transform: 'translateY(-3px)' },
                      }}
                    >
                      Contact Me
                    </Button>
                  </Stack>
                </motion.div>
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT IMAGE / PROFILE */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 440,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  overflow: 'hidden',
                  border: '1px solid rgba(45,212,191,0.35)',
                  boxShadow: '0 20px 40px rgba(45,212,191,0.15)',
                }}
              >
                <Box
                  component="img"
                  src={Picture}
                  alt="Shreda profile"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
