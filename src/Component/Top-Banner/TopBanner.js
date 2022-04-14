import { Box, Container } from "@mui/material";
import React from "react";
import video from "../../video/hostelhub.mp4";
import "./TopBanner.css"
const TopBanner = () => {
  return (
    <video className="my-vedio" autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default TopBanner;
