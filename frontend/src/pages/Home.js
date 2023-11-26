import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <Box>
      {}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping aplikacija
          </Typography>
          <Button component={Link} to="/products" color="inherit">
            Prikaži sve proizvode
          </Button>
          <Button component={Link} to="/add-product" color="inherit">
            Dodaj novi proizvod
          </Button>
          <Button component={Link} to="/shopping-lists" color="inherit">
            Prikaži shoping liste
          </Button>
          <Button component={Link} to="/add-shopping-list" color="inherit">
            Dodaj novu shoping listu
          </Button>
        </Toolbar>
      </AppBar>

      {}
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        </Typography>
        {}
      </Box>
    </Box>
  );
};

export default Home;
