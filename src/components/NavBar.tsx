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

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false); // close mobile menu
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
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(45, 212, 191, 0.12)",
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="shreda logo"
                sx={{ height: 36, width: "auto" }}
              />
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Nav */}
            <Stack
              direction="row"
              spacing={1.5}
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
                    px: 2.5,
                    "&:hover": { color: "primary.main", bgcolor: "transparent" },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={toggleMobileMenu}
              sx={{ display: { xs: "flex", md: "none" }, color: "text.primary", ml: 1 }}
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
              transition={{ duration: 0.3 }}
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
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "#0F172A",
                zIndex: 100,
                padding: "2rem",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            >
              <Stack spacing={3} alignItems="center">
                {navItems.map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: navItems.indexOf(item) * 0.1 }}
                  >
                    <Button
                      onClick={() => handleScroll(item.toLowerCase())}
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        px: 4,
                        py: 1.5,
                        width: "100%",
                        bgcolor: "rgba(45,212,191,0.08)",
                        borderRadius: 2,
                        "&:hover": { bgcolor: "rgba(45,212,191,0.15)" },
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
