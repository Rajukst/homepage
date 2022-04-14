import React from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import contact from "../../Images/hostelhub.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  AOS.init();
  return (
    <Box>
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">

      <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">
              What is{" "}
              <Box
                sx={{
                  fontWeight: "bold",
                  display: "inline",
                  color: "Aquamarine",
                }}
              >
                Hostel Hub?
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ textAlign: "justify", m: 1 }}>
                HotelHub is a hotel booking platform designed for Travel
                Management Companies for managing business travel. The platform
                includes an intuitive booking tool for agents that fully
                automates the hotel booking workflow. Additionally, the HotelHub
                platform includes an API that is integrated with the industry’s
                online booking tools. This ensures all hotel bookings regardless
                of how they are booked, are manageable within the HotelHub
                platform.
              </Box>
            </Typography>
          </Grid>
        <Grid item xs={12} md={6}>
          <img src={contact} alt="contact image" />
        </Grid>
      </Grid>
      </div>
    </Box>
  );
};

export default Contact;
