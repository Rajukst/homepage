import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import "./Solution.css"
const Solution = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom component="div">
        Solutions
      </Typography>
      <Typography variant="body1" gutterBottom>
        Scalable solutions to support your dynamic business requirements.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <div className="discountDivs">
            <div className="card border-0">
              <div className="card-body">
                {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                <h4 className="card-title">Safe To Stay Features</h4>
                <p className="card-text">
                  At HotelHub we constantly enhance our Products and Services to
                  support our customers. Safety and hygiene are of utmost
                  importance to travellers and the HotelHub API has now been
                  enhanced to indicate the newly added safety features. All the
                  booking tools using this API can display the Safe to Stay
                  information in their UI, enabling agents and travellers choose
                  the right hotel with confidence. We understand that the
                  priority is to ensure travellers are fully informed about the
                  health and safety protocols maintained by hotels and the
                  information provided can be confidently relied upon whilst
                  booking their accommodation.
                </p>
                <button className="cart-button">Discover</button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className="discountDivs">
            <div className="card border-0">
              <div className="card-body">
                {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                <h4 className="card-title">Hotel Connect</h4>
                <p className="card-text">
                  The HotelHub HotelConnect is a user-friendly app that deeply
                  integrates with the agent GDS terminal enabling hotels to be
                  booked in less than 10 seconds whenever an overnight stay
                  opportunity is detected in a traveller’s itinerary. As the
                  agent is booking a travel segment, HotelConnect proactively
                  responds with a personalised hotel shopping list without the
                  agent having to explicitly shop for hotels. HotelConnect does
                  this intelligently in the background and works in an assistive
                  manner to support agents and drive up productivity.
                </p>
                <button className="cart-button">Discover </button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className="discountDivs">
            <div className="card border-0">
              <div className="card-body">
                {/* <img src={image} className="img-fluid p-1" alt="Girl in a jacket" /> */}
                <h4 className="card-title">Personalisation</h4>
                <p className="card-text">
                  HotelHub Personalisation solution provides context-appropriate
                  data in the hotel booking flow, thanks to our cutting-edge
                  tech-stack and data-driven business insights. With help of
                  advanced AI & ML technology; the shopping and booking patterns
                  of agents, travellers and corporations are deeply analysed to
                  provide them with a personalised hotel booking experience by
                  predicting preferred hotel listing, price range and room &
                  rate types, enabling travellers make better travel decisions.
                  HotelHub Personalisation continuously collects application
                  usage data to improve the personalisation logic which in turn
                  improves user satisfaction and increases booking profitability
                </p>
                <button className="cart-button">Add to Cart </button>
              </div>
            </div>
          </div>
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default Solution;
