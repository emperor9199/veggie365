import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShippingScreen from "../../components/ShippingScreen/ShippingScreen";
import ReviewOrderScreen from "../ReviewOrderScreen";
import PaymentScreen from "../PaymentScreen";
import { PlaceOrderContainer } from "./Styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const PlaceOrderScreen = () => {
  const classes = useStyles();

  // expand accordingly
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { itemsPrice, deliveryPrice, taxPrice, totalPrice } = useSelector(
    (state) => state.addToCartReducer
  );

  return (
    <PlaceOrderContainer>
      <div className="accordian-container" style={{ width: "100%" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{ padding: "1rem 0" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Shipping Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ShippingScreen expanded={expanded} setExpanded={setExpanded} />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{ padding: "1rem 0" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Order Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ReviewOrderScreen
                expanded={expanded}
                setExpanded={setExpanded}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{ padding: "1rem 0" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Payment Options</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <PaymentScreen />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="price-summary-container">
        <h2>Price Details</h2>
        <h3>Items Price : ₹{itemsPrice}</h3>
        <h3>Delivery Price : ₹{deliveryPrice}</h3>
        <h3>Tax Price : ₹{taxPrice}</h3>
        <h3>Total Price : ₹{totalPrice}</h3>
      </div>
    </PlaceOrderContainer>
  );
};

export default PlaceOrderScreen;
