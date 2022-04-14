import { Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import pic1 from "../../Images/pic1.png";
import pic2 from "../../Images/pic2.png";
import pic3 from "../../Images/pic3.png";
const Case = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Container>
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={pic1} />
            </Stack>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={pic2} />
            </Stack>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={pic3} />
            </Stack>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Case;
