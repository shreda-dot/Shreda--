import * as React from 'react';
import { Box, Container, Typography, Stack, Button, Chip, Grid, Divider } from '@mui/material';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import type { Variants } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { brand } from '../theme/brandColors';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built with React, MUI, and Framer Motion. Fully responsive with smooth scroll, typing animation, and interactive animations.',
    tech: ['React', 'MUI', 'Framer Motion', 'TypeScript'],
    link: 'https://t.co/JLB6cLCLSm',
    accent: brand.gold,
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'Admin dashboard for an e-commerce platform with dynamic charts, data tables, and reusable UI components. Built with React and TypeScript.',
    tech: ['React', 'TypeScript', 'Chart.js'],
    link: 'https://e-commerce-shreda-4.onrender.com',
    accent: brand.rose,
  },
  {
    title: 'DX Innovation App',
    description:
      'A scalable landing page with responsive layouts and interactive data visualisation charts. Designed for seamless performance and future expansion.',
    tech: ['React', 'TypeScript', 'Recharts'],
    link: 'https://www.dxinnovationhub.com/',
    accent: brand.mist,
  },
];

// ── 3D Tilt Card ────────────────────────────────────────────────────────────
const TiltCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rawRotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rawRotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);
  const rotateX = useSpring(rawRotateX, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rawRotateY, { stiffness: 300, damping: 30 });
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
        height: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          cursor: 'default',
          transition: 'border-color 0.3s',
          '&:hover': { borderColor: project.accent },
        }}
      >
        {/* Glow gradient that follows mouse */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 12,
            backgroundImage: `radial-gradient(circle at ${glowX.get()} ${glowY.get()}, ${project.accent}18 0%, transparent 65%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Top accent line */}
        <Box
          sx={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 3, borderRadius: '12px 12px 0 0',
            background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Typography variant="h5" fontWeight={700} sx={{ color: project.accent, mb: 1.5 }}>
            {project.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, flexGrow: 1 }}>
            {project.description}
          </Typography>

          <Stack direction="row" spacing={0.8} flexWrap="wrap" sx={{ mb: 3, gap: 0.8 }}>
            {project.tech.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  bgcolor: `${project.accent}18`,
                  color: project.accent,
                  fontWeight: 600,
                  border: `1px solid ${project.accent}40`,
                  fontSize: '0.72rem',
                }}
              />
            ))}
          </Stack>

          <Button
            variant="outlined"
            size="small"
            endIcon={<OpenInNewIcon fontSize="small" />}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignSelf: 'flex-start',
              borderColor: `${project.accent}60`,
              color: project.accent,
              fontWeight: 600,
              '&:hover': {
                borderColor: project.accent,
                bgcolor: `${project.accent}12`,
                transform: 'translateY(-2px)',
              },
            }}
          >
            View Project
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

// ── Variants for section header ─────────────────────────────────────────────
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: { xs: 8, md: 14 }, perspective: '1200px' }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          sx={{ mb: 8 }}
        >
          <motion.div variants={fadeUp}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 700, letterSpacing: 3 }}
            >
              WHAT I'VE BUILT
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Featured{' '}
              <Box component="span" color="secondary.main">
                Projects
              </Box>
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Divider sx={{ width: 80, borderWidth: 3, borderColor: 'primary.main', borderRadius: 2 }} />
          </motion.div>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {projects.map((project, i) => (
            <Grid item xs={12} md={4} key={i} sx={{ display: 'flex' }}>
              <TiltCard project={project} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
