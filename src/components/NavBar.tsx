import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Stack,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navItems = ["Home", "Skills", "Projects", "Contact"];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false); // Close menu on mobile
  };

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "rgba(148, 163, 184, 0.12)",
          backdropFilter: "blur(10px)", // subtle frosted effect
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76 }}>
            {/* Logo */}
            <Box
              component="button"
              onClick={() => handleScroll("home")}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                p: 0.6,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "rgba(45, 212, 191, 0.35)",
                bgcolor: "rgba(45, 212, 191, 0.06)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(45, 212, 191, 0.12)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="shreda logo"
                sx={{ height: 38, width: "auto", display: "block" }}
              />
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Nav */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    px: 3,
                    "&:hover": {
                      color: "primary.main",
                      bgcolor: "transparent",
                      transform: "scale(1.05)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={toggleMobileMenu}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "text.primary",
                ml: 1,
                // Increase the touch target area
                p: 1.5,
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: "2rem", sm: "2.2rem" }, // Makes the actual icon bigger
                },
                // Adding a subtle background makes it easier to see/hit
                bgcolor: "rgba(255, 255, 255, 0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                transition: "0.2s",
                "&:active": {
                  transform: "scale(0.9)", // Visual feedback when tapped
                  bgcolor: "rgba(45, 212, 191, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Framer Motion Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "#000",
                zIndex: 99,
              }}
              onClick={toggleMobileMenu}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ y: "100%", opacity: 0.8, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "100%", opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "#0F172A",
                zIndex: 100,
                padding: "2.5rem",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                boxShadow: "0 -10px 40px rgba(45,212,191,0.25)",
              }}
            >
              <Stack spacing={3} alignItems="center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                  >
                    <Button
                      onClick={() => handleScroll(item.toLowerCase())}
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        width: "100%",
                        py: 1.8,
                        borderRadius: 3,
                        bgcolor: "rgba(45,212,191,0.08)",
                        "&:hover": { bgcolor: "rgba(45,212,191,0.15)" },
                        transition: "all 0.2s ease",
                      }}
                    >
                      {item}
                    </Button>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
