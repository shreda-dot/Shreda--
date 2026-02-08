import * as React from 'react';
import { 
  Box, Container, Typography, TextField, Button, 
  Grid, Stack, IconButton 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// 1. Import Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://formspree.io/f/xzdazpzo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box id="contact" sx={{ py: 12, bgcolor: 'background.default', overflow: 'hidden' }}>
      <Container maxWidth="md">
        <Grid container spacing={8}>
          
          {/* Socials & Info - Animated Slide Right */}
          <Grid 
            item xs={12} md={5}
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
              Get in touch
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </Typography>

            <Stack direction="row" spacing={2}>
              {[ 
                { icon: <GitHubIcon fontSize="large" />, url: "https://github.com/shreda-dot" },
                { icon: <TwitterIcon fontSize="large" />, url: "https://x.com/sha_dra_ch" },
                { icon: <InstagramIcon fontSize="large" />, url: "#" }
              ].map((social, index) => (
                <IconButton 
                  key={index}
                  component={motion.a}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  color="primary" 
                  href={social.url} 
                  target="_blank"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form - Animated Fade/Slide Up */}
          <Grid 
            item xs={12} md={7}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <Box
                  key="success"
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  sx={{ 
                    p: 4, 
                    textAlign: 'center', 
                    border: '2px dashed', 
                    borderColor: 'primary.main',
                    borderRadius: 4
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    ✅ Message sent successfully!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    I’ll get back to you soon.
                  </Typography>
                </Box>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Stack spacing={3}>
                    <TextField
                      fullWidth label="Name" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <TextField
                      fullWidth label="Email" type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <TextField
                      fullWidth label="Message" multiline rows={4} required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      sx={{ py: 1.5, fontWeight: 700 }}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                    </Button>
                  </Stack>
                </motion.form>
              )}
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;