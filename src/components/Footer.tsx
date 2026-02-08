import { 
  Box, Container, Typography, Stack, IconButton, 
  Divider, Link, Grid, Fab, Tooltip 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        pt: 10,
        pb: 6,
        // Using a slightly different shade for separation
        bgcolor: 'rgba(15, 23, 42, 0.5)', 
        // Adding a more defined border with your primary theme color
        borderTop: '1px solid rgba(45, 212, 191, 0.15)', 
        position: 'relative',
        backdropFilter: 'blur(10px)', // Subtle glassmorphism effect
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
          
          {/* Brand/Logo Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'primary.main', letterSpacing: 1 }}>
              SHREDA<span style={{ color: '#fff' }}>.</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, mb: 3, lineHeight: 1.7 }}>
              Engineering performant web interfaces with a focus on clean code and exceptional user experience.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', color: 'text.primary', fontSize: '0.75rem' }}>
              Navigation
            </Typography>
            <Stack spacing={1.5}>
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  underline="none"
                  color="text.secondary"
                  sx={{ 
                    fontSize: '0.9rem',
                    '&:hover': { color: 'primary.main', transform: 'translateX(5px)' }, 
                    transition: '0.3s' 
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Socials Section */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', color: 'text.primary', fontSize: '0.75rem' }}>
              Connect
            </Typography>
            <Stack direction="row" spacing={1}>
              {[
                { icon: <GitHubIcon />, url: 'https://github.com/shreda-dot' },
                { icon: <TwitterIcon />, url: 'https://x.com/sha_dra_ch' },
                { icon: <InstagramIcon />, url: '#' },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={social.url}
                  target="_blank"
                  sx={{ 
                    color: 'text.secondary', 
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    '&:hover': { 
                      color: 'primary.main', 
                      bgcolor: 'rgba(45, 212, 191, 0.05)',
                      borderColor: 'primary.main' 
                    },
                    transition: '0.3s'
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, opacity: 0.05 }} />

        {/* Bottom Bar */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Shreda. Built with MUI v5 & Framer Motion.
          </Typography>
          
          {/* Back to Top Button */}
          <Tooltip title="Scroll to Top" arrow>
            <Fab
              size="small"
              color="primary"
              onClick={scrollToTop}
              component={motion.button}
              whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(45, 212, 191, 0.4)' }}
              whileTap={{ scale: 0.9 }}
              sx={{ 
                transition: '0.3s',
                boxShadow: '0 4px 14px 0 rgba(45, 212, 191, 0.3)' 
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Tooltip>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;