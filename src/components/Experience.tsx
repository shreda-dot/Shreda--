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

  return (
    <Container id="skills" sx={{ py: 10 }}>
      <Typography variant="h2" gutterBottom>
        Experience
      </Typography>

      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <Stack spacing={4}>
          {jobs.map((job, i) => (
            <Paper
              key={i}
              component={motion.div}
              variants={fadeInUp}
              variant="outlined"
              sx={{
                p: 4,
                bgcolor: "background.paper",
                borderColor: "rgba(255,255,255,0.05)",
                cursor: "default",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography variant="h5" color="primary.main">
                  {job.role}
                </Typography>
                <Typography color="text.secondary">{job.period}</Typography>
              </Box>

              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
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
