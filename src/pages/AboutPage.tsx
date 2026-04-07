import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BiotechIcon from '@mui/icons-material/Biotech';
import Picture from '../assets/IMG-20250207-WA0045.jpg';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const milestones = [
  {
    icon: <BiotechIcon color="secondary" />,
    title: 'Biochemistry Graduate',
    detail: 'Nnamdi Azikiwe University, Awka — Anambra State, Nigeria',
  },
  {
    icon: <CodeIcon color="primary" />,
    title: 'Self-Taught Developer',
    detail: 'Transitioned from lab benches to code editors — React, TypeScript, Node.js',
  },
  {
    icon: <SchoolIcon sx={{ color: 'info.main' }} />,
    title: 'Continuous Learner',
    detail: 'Building production-grade apps and deepening backend skills with Express & MongoDB',
  },
];

const AboutPage = () => {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        {/* ── Page Header ── */}
        <Box
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={stagger}
          sx={{ mb: 10 }}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 700, letterSpacing: 3 }}
            >
              ABOUT ME
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              The Story Behind the{' '}
              <Box component="span" color="primary.main">
                Code
              </Box>
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Divider
              sx={{
                width: 80,
                borderWidth: 3,
                borderColor: 'secondary.main',
                borderRadius: 2,
              }}
            />
          </motion.div>
        </Box>

        {/* ── Main Content ── */}
        <Grid container spacing={8} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 60px rgba(201,168,108,0.2)',
                  aspectRatio: '4/5',
                }}
              >
                <Box
                  component="img"
                  src={Picture}
                  alt="Shreda"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={8}>
            <Box
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <Stack spacing={3}>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h5" color="primary" fontWeight={700}>
                    Hi, I'm Shreda — Biochemist turned Full-Stack Developer
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                    I graduated from{' '}
                    <Box component="span" color="text.primary" fontWeight={600}>
                      Nnamdi Azikiwe University, Awka, Anambra State, Nigeria
                    </Box>{' '}
                    with a degree in Biochemistry. My academic journey trained me in analytical
                    thinking, problem decomposition, and attention to detail — skills that translate
                    remarkably well into software engineering.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                    The pivot from lab coats to keyboards wasn't accidental. I discovered that
                    building interfaces gives me the same intellectual satisfaction as running an
                    experiment — only the feedback loop is faster, and the bugs are (usually) less
                    dangerous. I fell in love with React for the way it lets you compose complex UIs
                    from small, predictable pieces — much like biochemical pathways.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                    Today I build full-stack web applications using{' '}
                    <Box component="span" color="primary.main" fontWeight={600}>
                      React, TypeScript, Node.js, Express, and MongoDB
                    </Box>
                    . I care deeply about performance, accessibility, and writing code that other
                    humans can actually read.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'MUI'].map(
                      (tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(201,168,108,0.12)',
                            color: 'primary.main',
                            fontWeight: 600,
                            border: '1px solid rgba(201,168,108,0.3)',
                          }}
                        />
                      )
                    )}
                  </Stack>
                </motion.div>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* ── Milestones ── */}
        <Box sx={{ mt: 12 }}>
          <Typography variant="h4" sx={{ mb: 5, fontWeight: 700 }}>
            Key Milestones
          </Typography>
          <Grid container spacing={4}>
            {milestones.map((m, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  variant="outlined"
                  sx={{
                    p: 4,
                    height: '100%',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 12px 30px rgba(201,168,108,0.15)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{m.icon}</Box>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {m.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {m.detail}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
