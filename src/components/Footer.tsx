import {
  Box, Container, Typography, Stack, IconButton,
  Divider, Grid, Fab, Tooltip, useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';
import { alpha, brand } from '../theme/brandColors';

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const accentWash = isDark ? alpha('gold', 0.06) : 'rgba(47, 107, 0, 0.08)';
  const accentBorder = isDark ? alpha('gold', 0.22) : 'rgba(47, 107, 0, 0.22)';

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
        bgcolor: isDark ? 'rgba(7, 9, 8, 0.72)' : '#ffffff',
        borderTop: `1px solid ${accentBorder}`, 
        position: 'relative',
        boxShadow: isDark ? 'none' : '0 -18px 50px rgba(16, 22, 16, 0.08)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
          
          {/* Brand/Logo Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'primary.main', letterSpacing: 1 }}>
              SHREDA<span style={{ color: isDark ? brand.rose : theme.palette.secondary.main }}>.</span>
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
              {[
                { label: 'Home',       id: 'home' },
                { label: 'Skills',     id: 'skills' },
                { label: 'Projects',   id: 'projects' },
                { label: 'Contact',    id: 'contact' },
              ].map((item) => (
                <Typography
                  key={item.label}
                  variant="body2"
                  color="text.secondary"
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    '&:hover': { color: 'primary.main', transform: 'translateX(5px)', display: 'inline-block' },
                  }}
                >
                  {item.label}
                </Typography>
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
                { icon: <InstagramIcon />, url: 'https://www.instagram.com/shreda_shadrach/' },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={social.url}
                  target="_blank"
                  sx={{ 
                    color: 'text.secondary', 
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(16, 22, 16, 0.1)'}`,
                    '&:hover': { 
                      color: 'primary.main', 
                      bgcolor: accentWash,
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

        <Divider sx={{ my: 6, opacity: isDark ? 0.08 : 0.45 }} />

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
              whileHover={{
                y: -5,
                boxShadow: isDark
                  ? `0 8px 20px ${alpha('gold', 0.4)}`
                  : '0 8px 20px rgba(47, 107, 0, 0.28)',
              }}
              whileTap={{ scale: 0.9 }}
              sx={{ 
                transition: '0.3s',
                boxShadow: isDark
                  ? `0 4px 14px 0 ${alpha('gold', 0.35)}`
                  : '0 4px 14px rgba(47, 107, 0, 0.24)' 
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
