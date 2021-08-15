import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ShippingScreen from "../../components/ShippingScreen/ShippingScreen";
import PaymentScreen from "../../components/PaymentScreen/PaymentScreen";
import { PlaceOrderContainer } from "./Styles";
import { useSelector } from "react-redux";
import OrderCart from "../../components/OrderCart/OrderCart";
import ShippingNew from "../../components/ShippingNew/ShippingNew";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const PlaceOrderScreen = () => {
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();

  if (!Object.keys(user).length) {
    history.push("/login");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  // expand accordingly
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { shippingAddress, itemsPrice, deliveryPrice, taxPrice, totalPrice } =
    useSelector((state) => state.addToCartReducer);

  return (
    <PlaceOrderContainer>
      <div className="accordian-container" style={{ width: "100%" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{ padding: "1rem 0", borderRadius: "5px" }}
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
              <ShippingNew expanded={expanded} setExpanded={setExpanded} />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{ padding: "1rem 0", borderRadius: "5px" }}
          // disabled={Object.keys(shippingAddress).length ? false : true}
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
              <OrderCart expanded={expanded} setExpanded={setExpanded} />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{ padding: "1rem 0", borderRadius: "5px" }}
          // disabled={Object.keys(shippingAddress).length ? false : true}
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
        <h2>PRICE DETAILS</h2>
        <hr />
        <p style={{ fontWeight: "bold" }}>
          Items Price : <span style={{ color: "green" }}>₹{itemsPrice}</span>
        </p>
        <p style={{ fontWeight: "bold" }}>
          Delivery Price :{" "}
          <span style={{ color: "green" }}>
            {deliveryPrice === 0 ? "Free" : "₹" + deliveryPrice}
          </span>
        </p>
        <p style={{ fontWeight: "bold" }}>
          Tax Price :{" "}
          <span style={{ color: "green" }}>
            {taxPrice === 0 ? "No Tax" : "₹" + taxPrice}
          </span>
        </p>
        <h3 style={{ color: "green" }}>Total Price : ₹{totalPrice}</h3>
      </div>
    </PlaceOrderContainer>
  );
};

export default PlaceOrderScreen;
