import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Picture from '../assets/IMG-20250207-WA0045.jpg';

const Hero = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{ py: { xs: 8, md: 15 }, overflow: 'hidden' }}
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
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: 700, letterSpacing: 2 }}
                  >
                    FRONTEND ENGINEER • LAGOS, NIGERIA
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography variant="h1">
                    Hi, I’m <span style={{ color: '#2DD4BF' }}>Shreda</span>.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 520, lineHeight: 1.6 }}
                  >
                    A Front-End Engineer with <strong>3+ years of experience</strong>{' '}
                    building performant, scalable, and visually polished web
                    interfaces using modern React ecosystems and design systems.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      size="large"
                      href="#projects"
                      sx={{
                        transition: '0.3s',
                        '&:hover': { transform: 'translateY(-3px)' },
                      }}
                    >
                      View Projects
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      href="#contact"
                      sx={{
                        transition: '0.3s',
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

          {/* RIGHT IMAGE / PROFILE AREA */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 420,
                  bgcolor: 'rgba(45, 212, 191, 0.08)',
                  borderRadius:
                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                  border: '1px solid rgba(45, 212, 191, 0.35)',
                  boxShadow: '0px 20px 40px rgba(45, 212, 191, 0.15)',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={Picture}
                  alt="Shreda profile"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
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
