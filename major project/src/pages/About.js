import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Foodies World</Typography>
        <p>
        Ratna's Kitchen has been serving delightful experiences through the art of cooking for four decades. Our cozy, 
        relaxing space combined with flavorful dishes makes it a first choice for every foodie in town. We provide a wide 
        range of cuisines and dishes to choose from so that every foodie in town has their best experience here.
          
        </p>
      32
      </Box>
    </Layout>
  );
};

export default About;
