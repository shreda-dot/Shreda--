import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

interface Skill {
  name: string;
  level: number; // 0–100
}

const skillCategories: { category: string; color: string; skills: Skill[] }[] = [
  {
    category: 'Frontend',
    color: '#bd93f9',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'Material UI (MUI)', level: 88 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    category: 'Backend',
    color: '#ff79c6',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express', level: 76 },
      { name: 'MongoDB', level: 74 },
      { name: 'Mongoose', level: 72 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    category: 'Tools & Workflow',
    color: '#8be9fd',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vite', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma (reading designs)', level: 68 },
      { name: 'npm / pnpm', level: 82 },
    ],
  },
];

const otherTech = [
  'JavaScript (ES2022+)',
  'Axios',
  'React Router',
  'Context API',
  'Responsive Design',
  'Accessibility (a11y)',
  'Postman',
  'Vercel',
  'Render',
];

const SkillsPage = () => {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 14 } }}>
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
              WHAT I WORK WITH
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Skills &{' '}
              <Box component="span" color="secondary.main">
                Technologies
              </Box>
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Divider
              sx={{
                width: 80,
                borderWidth: 3,
                borderColor: 'primary.main',
                borderRadius: 2,
              }}
            />
          </motion.div>
        </Box>

        {/* ── Skill Bars ── */}
        <Grid container spacing={5}>
          {skillCategories.map((cat, ci) => (
            <Grid item xs={12} md={4} key={ci}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: ci * 0.15 }}
                variant="outlined"
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  borderColor: 'divider',
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: cat.color,
                    boxShadow: `0 12px 30px ${cat.color}22`,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ mb: 4, color: cat.color }}
                >
                  {cat.category}
                </Typography>

                <Stack spacing={3}>
                  {cat.skills.map((skill, si) => (
                    <Box key={si}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 0.8,
                        }}
                      >
                        <Typography variant="body2" fontWeight={600}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: si * 0.08, ease: 'easeOut' }}
                      >
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 7,
                            borderRadius: 4,
                            bgcolor: 'divider',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              bgcolor: cat.color,
                            },
                          }}
                        />
                      </motion.div>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* ── Other Technologies ── */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
            Also Familiar With
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            {otherTech.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{
                  borderColor: 'divider',
                  color: 'text.secondary',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    bgcolor: 'rgba(189,147,249,0.08)',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsPage;
