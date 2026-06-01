import {
  Paper,
  Stack,
  Typography,
  Container,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { alpha } from "../theme/brandColors";

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const accentAlpha = (opacity: number) =>
    theme.palette.mode === "dark" ? alpha("gold", opacity) : `rgba(47, 107, 0, ${opacity})`;

  const jobs = [
    {
      company: "JAMBIFY",
      role: "Lead Full-Stack Developer",
      period: "2026 - Present",
      desc: "Architected and developed a comprehensive JAMB preparation platform featuring interactive mock exams, real-time performance analytics, and a gamified learning dashboard. Focused on creating a high-performance, responsive UI that serves thousands of students.",
      image: "/experience/Screenshot 2026-05-25 135431.png",
      link: "https://jambify-frontend.vercel.app/",
      tags: ["React", "TypeScript", "MUI", "Framer Motion"],
    },
    {
      company: "Apprelab Inc.",
      role: "Junior Full-Stack Engineer",
      period: "2025 - Present",
      desc: "Architected scalable, reusable UI components with React and TypeScript, leading the implementation of design systems that increased development efficiency by 40% and ensured consistent branding across multiple projects.",
      tags: ["React", "TypeScript", "Node.js"],
    },
    {
      company: "Onehive Plc",
      role: "Front-End Engineer",
      period: "2022 - 2025",
      desc: "Developed and optimized dynamic web interfaces using React and modern JavaScript frameworks, reducing page load times by 35% and improving user engagement through responsive and accessible UI design.",
      tags: ["React", "JavaScript", "Tailwind"],
    },
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
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
    <Container
      id="experience"
      component="section"
      sx={{ py: { xs: 10, md: 16 } }}
    >
      <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
        Experience
      </Typography>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <Stack spacing={6}>
          {jobs.map((job, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Paper
                variant="outlined"
                sx={{
                  p: { xs: 3, md: 4 },
                  bgcolor: "background.paper",
                  borderColor: "rgba(255,255,255,0.05)",
                  cursor: "default",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: `0 12px 24px ${accentAlpha(0.05)}`,
                  transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 30px 60px ${accentAlpha(0.15)}`,
                    borderColor: "primary.main",
                  },
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  {job.image && !isMobile && (
                    <Grid item md={5}>
                      <Box
                        component={motion.div}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        sx={{
                          width: "100%",
                          height: 240,
                          borderRadius: 2,
                          overflow: "hidden",
                          position: "relative",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        }}
                      >
                        <Box
                          component="img"
                          src={job.image}
                          alt={job.company}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                          }}
                        />
                      </Box>
                    </Grid>
                  )}

                  <Grid item xs={12} md={job.image ? 7 : 12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          color="primary.main"
                          fontWeight={700}
                        >
                          {job.role}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, opacity: 0.9 }}
                        >
                          {job.company}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          bgcolor: "rgba(255,255,255,0.03)",
                          px: 2,
                          py: 0.5,
                          borderRadius: 10,
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        {job.period}
                      </Typography>
                    </Box>

                    {job.image && isMobile && (
                      <Box
                        sx={{
                          width: "100%",
                          height: 200,
                          borderRadius: 2,
                          overflow: "hidden",
                          mb: 3,
                          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                        }}
                      >
                        <Box
                          component="img"
                          src={job.image}
                          alt={job.company}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    )}

                    <Typography
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.7,
                        fontSize: "1rem",
                      }}
                    >
                      {job.desc}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 2,
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          gap: 1,
                          flexGrow: 1,
                        }}
                      >
                        {job.tags.map((tag) => (
                          <Box
                            key={tag}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                              bgcolor: accentAlpha(0.1),
                              color: "primary.main",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              letterSpacing: "0.05em",
                              border: `1px solid ${accentAlpha(0.2)}`,
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>

                      {job.link && (
                        <Button
                          variant="text"
                          size="small"
                          endIcon={
                            <OpenInNewIcon
                              sx={{ fontSize: "1rem !important" }}
                            />
                          }
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            "&:hover": {
                              bgcolor: accentAlpha(0.08),
                              transform: "translateX(4px)",
                            },
                            transition: "all 0.2s",
                          }}
                        >
                          Visit Project
                        </Button>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Container>
  );
};

export default Experience;
