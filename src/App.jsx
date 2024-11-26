import React, { useState } from 'react';
import { AppBar, Box, Button, Drawer, Toolbar, Typography, useMediaQuery, useTheme, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import the chapter components
import Chapter11 from './Routes/Chapter11';
import Chapter13 from './Routes/Chapter13';
import Chapter14 from './Routes/Chapter14';
import Chapter15 from './Routes/Chapter15';
import Chapter16 from './Routes/Chapter16';
import Chapter17 from './Routes/Chapter17';
import Chapter18 from './Routes/Chapter18';
import Chapter19 from './Routes/Chapter19';

// Create the custom theme with responsive typography
const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Navy blue for AppBar and Drawer
    },
    secondary: {
      main: '#ffffff', // White for text inside the AppBar and Drawer
    },
    background: {
      default: '#90CAF9', // Light blue for main content
    },
    text: {
      primary: '#000000', // Black text for readability
    },

  },
  typography: {
    // h3 for the main header
    h3: {
      fontSize: '1.5rem', // Default font size
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.2rem',
      },
    },
    body1: {
      fontSize: '0.875rem', // Base font size for mobile
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.2rem',
      },
    },
    body2: {
      fontSize: '0.875rem', // Base font size for mobile
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.2rem',
      },
    },
  },
});

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const themeInstance = useTheme();

  // Check if the screen size is small (mobile)
  const isMobile = useMediaQuery(themeInstance.breakpoints.down('sm'));

  // Toggle Drawer open/close
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Close the Drawer after selecting a chapter
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Router> {/* Wrap everything in BrowserRouter */}
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', m: 0, p: 0 }}>
          {/* AppBar */}
          <AppBar 
            position="sticky" 
            sx={{
              zIndex: 1,  // Ensure AppBar is above the Drawer
              width: '100%',  // Make sure AppBar spans the full width
              top: 0,         // Ensure it sticks to the top
              left: 0,        // Align to the left side of the screen
              paddingLeft: 0, // Remove padding on the left side
              paddingRight: 0, // Remove padding on the right side
              marginTop: 0,    // Remove margin-top (fix for spacing above)
              backgroundColor: theme.palette.primary.main, // AppBar color
              boxShadow: 'none', // Remove shadow to keep the AppBar clean
            }}
          >
            <Toolbar sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <Typography variant="h6" sx={{ color: theme.palette.secondary.main, paddingLeft: 2 }}>
                Chemistry II
              </Typography>
              {/* Links for desktop */}
              {!isMobile && (
                <>
                  <Button color="inherit" component={Link} to="/chapter-11">
                    Chapter 11
                  </Button>
                  <Button color="inherit" component={Link} to="/chapter-13">
                    Chapter 13
                  </Button>
                  <Button color="inherit" component={Link} to="/chapter-14">
                    Chapter 14
                  </Button>
                  <Button color="inherit" component={Link} to="/chapter-15">
                    Chapter 15
                  </Button>
                  <Button color="inherit" component={Link} to="/chapter-16">
                    Chapter 16
                  </Button>
                  <Button color="inherit" component={Link} to="/chapter-17">
                    Chapter 17
                  </Button>
                  <Button color="inherit" component={Link} to="/chapter-18">
                    Chapter 18
                  </Button>
                  <Button color="inherit" component={Link} to="/chapter-19">
                    Chapter 19
                  </Button>
                </>
              )}

              {/* Drawer toggle button for mobile */}
              {isMobile && (
                <Button color="inherit" onClick={toggleDrawer}>
                  Menu
                </Button>
              )}
            </Toolbar>
          </AppBar>

          {/* Drawer for mobile */}
          <Drawer
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{
              width: 240,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
                backgroundColor: theme.palette.primary.main, // Use theme's primary color for Drawer
                color: theme.palette.secondary.main
              },
            }}
            variant="temporary"
            anchor="left"
          >
            {/* Mobile menu links */}
            <Button color="inherit" onClick={handleDrawerClose} component={Link} to="/chapter-11">
              Chapter 11
            </Button>
            <Button color="inherit" onClick={handleDrawerClose} component={Link} to="/chapter-13">
              Chapter 13
            </Button>
            <Button color="inherit" onClick={handleDrawerClose} component={Link} to="/chapter-14">
              Chapter 14
            </Button>
            <Button color="inherit" onClick={handleDrawerClose} component={Link} to="/chapter-15">
              Chapter 15
            </Button>
            <Button color="inherit" onClick={handleDrawerClose} component={Link} to="/chapter-16">
              Chapter 16
            </Button>
            <Button color="inherit" onClick={handleDrawerClose} component={Link} to="/chapter-17">
              Chapter 17
            </Button>
            <Button color="inherit" onClick={handleDrawerClose} component={Link} to="/chapter-18">
              Chapter 18
            </Button>
            <Button color="inherit" onClick={handleDrawerClose} component={Link} to="/chapter-19">
              Chapter 19
            </Button>
          </Drawer>

          {/* Main content */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: theme.palette.background.default, // Light background for main content
              p: 3,
              marginTop: 0, // Prevent any margin above the main content
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 1200, textAlign: 'center' }}>
              {/* Define routes for different pages */}
              <Routes>
                <Route path="/" element={<Typography variant="h3">Welcome to Chemistry Study App</Typography>} />
                <Route path="/chapter-11" element={<Chapter11 />} />
                <Route path="/chapter-13" element={<Chapter13 />} />
                <Route path="/chapter-14" element={<Chapter14 />} />
                <Route path="/chapter-15" element={<Chapter15 />} />
                <Route path="/chapter-16" element={<Chapter16 />} />
                <Route path="/chapter-17" element={<Chapter17 />} />
                <Route path="/chapter-18" element={<Chapter18 />} />
                <Route path="/chapter-19" element={<Chapter19 />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router> {/* End of Router */}
    </ThemeProvider>
  );
}

export default App;
