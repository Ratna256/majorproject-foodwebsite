import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Ratna's Kitchen</Typography>
        <p text-align="center" font-size="2rem" fontWeight="bold">
          Phone Number :+91 6264873842;<br />
          Email-id     :foodiesworld@yahoo.com<br />
          Address      :Ratna's Kitchen at old Airport Road, opposite Jain University, Bangalore.   
        </p>
      </Box>
      <Box sx={{m:3, width: "600px", ml:10, "@media(max-width:600px)":{
        width:"300px",
      }}}></Box>
    </Layout>
  );
};

export default Contact;
