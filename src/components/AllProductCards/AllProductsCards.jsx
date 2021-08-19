import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AllProductsCards.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function AllProductsCards({ sliceData, pprice }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [redAlert, setRedAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (product, unit_price, unit, price_unit_id) => {
    dispatch(
      addToCart(
        product,
        product.product_id,
        Number(unit_price),
        unit,
        price_unit_id,
        1
      )
    ); //if dropdown appears then put dropdown value in place of qty
    setRedAlert(true);
    setOpen(true);
  };

  const handleSoldOut = () => {
    setRedAlert(true);
    setOpen(true);
  };

  // console.log("sliceData", sliceData);
  // console.log("pprice", pprice);
  return (
    <div className="allproducts_cards_container">
      {sliceData.map((product) => {
        let qty = product.total_quantity;
        return (
          <div className="allproduct_card" key={product.product_id}>
            <Link
              className="link_class"
              style={{ textDecoration: "none" }}
              to={`/product/${product.product_id}`}
            >
              <div className="starproduct_img">
                <img
                  className="starproduct_img_data"
                  src={product.product_cover_img}
                  alt={product.product_name}
                />
                {/* <div className="starproduct_dis_label">4%</div> */}
              </div>
            </Link>
            <div className="starproduct_data">
              {/* <div className="starproduct_rating">
                                <StarIcon style={{ color: "gold" }} />
                                <StarIcon style={{ color: "gold" }} />
                                </div> */}
              <Link
                className="link_class"
                to="/product/flower"
                style={{ textDecoration: "none" }}
              >
                <div className="starproduct_title">{product.product_name}</div>
                <div className="starproduct_high">SQ Special | Best Price</div>
                {pprice
                  .filter((item) => item.product_id === product.product_id)
                  .map((p, key) => {
                    return (
                      <div key={key} className="soldoutlab">
                        {qty < p.unit_in_gm ? (
                          <div className="soldOutLabel common_flex">
                            Sold Out
                          </div>
                        ) : (
                          ""
                        )}
                        <del className="starproduct_price_delete">
                          MRP: ₹
                          {p.discount === 0
                            ? p.product_price + 10
                            : p.discount + p.product_price}
                        </del>
                        <div className="starproduct_price">
                          ₹{p.product_price} per/{p.price_unit_name}
                        </div>
                      </div>
                    );
                  })}
              </Link>
            </div>
            <div className="starproduct_btn_con">
              {pprice
                .filter((item) => item.product_id === product.product_id)
                .map((p, key) => {
                  return (
                    <div
                      className="starproduct_btn"
                      onClick={
                        qty > p.unit_in_gm
                          ? () =>
                              handleAddToCart(
                                product,
                                p.product_price,
                                p.price_unit_name,
                                p.price_unit_id
                              )
                          : () => handleSoldOut()
                      }
                      key={key}
                    >
                      ADD
                      {/* snackbar */}
                      <div className={classes.root}>
                        <Snackbar
                          open={open}
                          autoHideDuration={1000}
                          onClose={handleClose}
                        >
                          <Alert
                            onClose={handleClose}
                            severity={!redAlert ? "success" : "error"}
                          >
                            {!redAlert
                              ? "Item added in your Cart"
                              : "Product Sold Out"}
                          </Alert>
                        </Snackbar>
                      </div>
                      {/* snackbar end */}
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProductsCards;
