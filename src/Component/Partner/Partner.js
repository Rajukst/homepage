
import { Container } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import pic1 from "../../Images/partner/pic1.png"
import pic2 from "../../Images/partner/pic2.png"
import pic3 from "../../Images/partner/pic3.png"
import pic4 from "../../Images/partner/pic4.png"
import pic5 from "../../Images/partner/pic5.png"
import pic6 from "../../Images/partner/pic6.png"
import pic7 from "../../Images/partner/pic7.png"
import pic8 from "../../Images/partner/pic8.png"
import pic9 from "../../Images/partner/pic9.png"

const Partner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <Container>
          
        <Slider {...settings}>
          <div>
            <img src={pic1} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
          <div>
          <img src={pic2} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
          <div>
          <img src={pic3} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
          <div>
          <img src={pic4} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
          <div>
          <img src={pic5} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
          <div>
          <img src={pic6} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
          <div>
          <img src={pic7} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
          <div>
          <img src={pic8} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
          <div>
          <img src={pic9} className="img-fluid p-5" alt="Girl in a jacket" />
          </div>
        </Slider>
      </Container>
    );
};

export default Partner;