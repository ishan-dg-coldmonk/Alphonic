import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      
    }
  };

  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      mb= "100rem 6%"
      textAlign={"center"}
      sx={{ mt:2 }}
      className = "nice"
    >
      <Typography className="image" variant="h2" color="#04235e" fontWeight="bold" style={ {fontFamily: 'poppins'}}>
       <SportsSoccerIcon fontSize="large"/> Alphonic
      </Typography>
      <div className="space">
            1
          </div>
      <Typography className="image" variant="h3" color="#1481da" fontWeight="bold" margin = "5" style={ {fontFamily: 'poppins'}} >
        The next gen AI
      </Typography>
      {loggedIn ? (
        
        <>
        <div className="space">
            1
          </div>
          <NavLink to="/" p={1}>
            Home
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <div className="space">
            1
          </div>
          <NavLink to="/register" p={1}>
            Sign Up
          </NavLink>
          <NavLink to="/login" p={1}>
            Sign In
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;