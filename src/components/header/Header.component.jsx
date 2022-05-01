import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              React CRUD App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
