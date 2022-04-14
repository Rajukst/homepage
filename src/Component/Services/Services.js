import React from "react";
import Typography from "@mui/material/Typography";
import { Row, Col } from "react-bootstrap";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    AOS.init();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div data-aos="zoom-in-up">
      <Typography variant="h2" gutterBottom component="div">
        Facilities & Service
      </Typography>
      <Container>
        <Row>
          <Col className="ps-5 pe-5">
            <Slider {...settings}>
              <div>
                <Row className="DiscountCarosul m-2">
                  <Col>
                    <div className="discountDiv">
                      <div className="card border-0">
                        <div className="card-body">
                        
                          {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                          <h4 className="card-title">Find Hostel</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id incidunt autem, obcaecati, maiores
                            voluptates ea eveniet modi omnis asperiores rem
                            atque laborum, non dolores fugit dolorem veniam
                            iusto laudantium. Possimus voluptatum hic, alias
                            deserunt libero quae. Non, et dolorum! Esse odio
                            animi consequuntur eveniet iusto facilis
                            consectetur! Iusto, in consectetur?
                          </p>
                          <button className="cart-button">Add to Cart </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="DiscountCarosul m-2">
                  <Col>
                    <div className="discountDiv">
                      <div className="card border-0">
                        <div className="card-body">
                        
                          {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                          <h4 className="card-title">Find Hostel</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id incidunt autem, obcaecati, maiores
                            voluptates ea eveniet modi omnis asperiores rem
                            atque laborum, non dolores fugit dolorem veniam
                            iusto laudantium. Possimus voluptatum hic, alias
                            deserunt libero quae. Non, et dolorum! Esse odio
                            animi consequuntur eveniet iusto facilis
                            consectetur! Iusto, in consectetur?
                          </p>
                          <button className="cart-button">Add to Cart </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="DiscountCarosul m-2">
                  <Col>
                    <div className="discountDiv">
                      <div className="card border-0">
                        <div className="card-body">
                        
                          {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                          <h4 className="card-title">Find Hostel</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id incidunt autem, obcaecati, maiores
                            voluptates ea eveniet modi omnis asperiores rem
                            atque laborum, non dolores fugit dolorem veniam
                            iusto laudantium. Possimus voluptatum hic, alias
                            deserunt libero quae. Non, et dolorum! Esse odio
                            animi consequuntur eveniet iusto facilis
                            consectetur! Iusto, in consectetur?
                          </p>
                          <button className="cart-button">Add to Cart </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="DiscountCarosul m-2">
                  <Col>
                    <div className="discountDiv">
                      <div className="card border-0">
                        <div className="card-body">
                          
                          {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                          <h4 className="card-title">Find Hostel</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id incidunt autem, obcaecati, maiores
                            voluptates ea eveniet modi omnis asperiores rem
                            atque laborum, non dolores fugit dolorem veniam
                            iusto laudantium. Possimus voluptatum hic, alias
                            deserunt libero quae. Non, et dolorum! Esse odio
                            animi consequuntur eveniet iusto facilis
                            consectetur! Iusto, in consectetur?
                          </p>
                          <button className="cart-button">Add to Cart </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="DiscountCarosul m-2">
                  <Col>
                    <div className="discountDiv">
                      <div className="card border-0">
                        <div className="card-body">
                         
                          {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                          <h4 className="card-title">Find Hostel</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id incidunt autem, obcaecati, maiores
                            voluptates ea eveniet modi omnis asperiores rem
                            atque laborum, non dolores fugit dolorem veniam
                            iusto laudantium. Possimus voluptatum hic, alias
                            deserunt libero quae. Non, et dolorum! Esse odio
                            animi consequuntur eveniet iusto facilis
                            consectetur! Iusto, in consectetur?
                          </p>
                          <button className="cart-button">Add to Cart </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="DiscountCarosul m-2">
                  <Col>
                    <div className="discountDiv">
                      <div className="card border-0">
                        <div className="card-body">
                          
                          {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                          <h4 className="card-title">Find Hostel</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id incidunt autem, obcaecati, maiores
                            voluptates ea eveniet modi omnis asperiores rem
                            atque laborum, non dolores fugit dolorem veniam
                            iusto laudantium. Possimus voluptatum hic, alias
                            deserunt libero quae. Non, et dolorum! Esse odio
                            animi consequuntur eveniet iusto facilis
                            consectetur! Iusto, in consectetur?
                          </p>
                          <button className="cart-button">Add to Cart </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="DiscountCarosul m-2">
                  <Col>
                    <div className="discountDiv">
                      <div className="card border-0">
                        <div className="card-body">
                          
                          {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                          <h4 className="card-title">Find Hostel</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id incidunt autem, obcaecati, maiores
                            voluptates ea eveniet modi omnis asperiores rem
                            atque laborum, non dolores fugit dolorem veniam
                            iusto laudantium. Possimus voluptatum hic, alias
                            deserunt libero quae. Non, et dolorum! Esse odio
                            animi consequuntur eveniet iusto facilis
                            consectetur! Iusto, in consectetur?
                          </p>
                          <button className="cart-button">Add to Cart </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
