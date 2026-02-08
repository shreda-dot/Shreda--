import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Chip,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React, MUI, and Framer Motion. Fully responsive with smooth scroll and interactive animations.",
    tech: ["React", "MUI", "Framer Motion"],
    link: "https://t.co/JLB6cLCLSm",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin dashboard for an e-commerce platform, built with React and TypeScript. Features dynamic charts, tables, and reusable UI components.",
    tech: ["React", "JavaScript", "Chart.js"],
    link: "https://e-commerce-shreda-4.onrender.com",
  },
  {
    title: "DX Innovation App",
    description:
      "A modern, scalable landing page built with React and TypeScript, designed for seamless performance and future expansion. Features responsive layouts and interactive charts for clear data visualization.",
    tech: ["React", "TypeScript", "Recharts"],
    link: "https://www.dxinnovationhub.com/",
  },
];

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = () => {
  return (
    <Container id="projects" sx={{ py: 10 }}>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>

      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <Grid container spacing={4}>
          {projects.map((project, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box
                component={motion.div}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: "1px solid rgba(45, 212, 191, 0.15)",
                  bgcolor: "background.paper",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                onClick={() => window.open(project.link, "_blank")}
              >
                <Box>
                  <Typography variant="h5" color="primary.main" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {project.tech.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "rgba(45, 212, 191, 0.1)",
                          color: "primary.main",
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Button
                  variant="outlined"
                  size="small"
                  sx={{ mt: 3, alignSelf: "flex-start" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.link, "_blank");
                  }}
                >
                  View Project
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
