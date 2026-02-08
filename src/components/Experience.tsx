import { Paper, Stack, Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Experience = () => {
  const jobs = [
    {
      company: "Onehive Plc",
      role: "Front-End Engineer",
      period: "2022 - 2025",
      desc: "Developed and optimized dynamic web interfaces using React and modern JavaScript frameworks, reducing page load times by 35% and improving user engagement through responsive and accessible UI design.",
    },
    {
      company: "Apprelab Inc.",
      role: "Front-End Engineer",
      period: "2025 - Present",
      desc: "Architected scalable, reusable UI components with React and TypeScript, leading the implementation of design systems that increased development efficiency by 40% and ensured consistent branding across multiple projects.",
    },
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
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
    <Container id="skills" sx={{ py: { xs: 10, md: 16 } }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
        Experience
      </Typography>

      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <Stack spacing={5}>
          {jobs.map((job, i) => (
            <Paper
              key={i}
              component={motion.div}
              variants={fadeInUp}
              variant="outlined"
              sx={{
                p: { xs: 3, md: 5 },
                bgcolor: "background.paper",
                borderColor: "rgba(255,255,255,0.05)",
                cursor: "default",
                borderRadius: 3,
                boxShadow: "0 12px 24px rgba(45,212,191,0.08)",
                transition: "all 0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 40px rgba(45,212,191,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  mb: 2,
                }}
              >
                <Typography variant="h5" color="primary.main">
                  {job.role}
                </Typography>
                <Typography color="text.secondary">{job.period}</Typography>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{ mb: 2, fontWeight: 600 }}
              >
                {job.company}
              </Typography>

              <Typography color="text.secondary">{job.desc}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Experience;
