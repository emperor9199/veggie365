import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import bookCabImg from "../../img/book-cab.svg";
import { bookCab } from "../../redux/actions/cabActions";
import { makeStyles } from '@material-ui/core/styles';
import { CabContainer } from "./Styles";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const CabScreen = () => {
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);
  const userr = JSON.parse(localStorage.getItem("loggedUser"));
  
  useEffect(() => {
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    const fetchProducts = async () => {
      const { data } = await authAxios.get("/caborder");
      setOrders(data);
    };
    fetchProducts();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const  userOrder = orders.filter((user) => user.user_id === userr[0].user_id);
  const liveOrder = userOrder.filter((live) => live.cab_order_status === 0|| live.cab_order_status === 1||live.cab_order_status === 2);
  
  const [userAddress, setUserAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();


  if (!Object.keys(user).length) {
    history.push("/login");
  }
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  var checkDemo =false;
  const handleBookCab = (e) => {
    liveOrder.map((check) => {
      if(check.user_address === userAddress){
        checkDemo = true;
      }
    })
    if(!checkDemo){
      e.preventDefault();
        dispatch(
          bookCab({ user_address: userAddress, user_pincode: Number(pincode) })
        );
        setTimeout(() => {
          history.push("/your-order-his");
        },500);
    }
    else{
      setOpen(true);
    }

  };

  return (
    <div>
      <CabContainer>
        <div className="cab-left">
          <img src={bookCabImg} alt="book-cab-img" style={{ width: "35vw" }} />
        </div>
        <form className="cab-right" onSubmit={handleBookCab}>
          <div className="sub-sec">
            <h1 style={{ marginBottom: "3rem" }}>Book a Cab</h1>
            <label htmlFor="address">Enter Address</label>
            <input
              type="text"
              onChange={(e) => setUserAddress(e.target.value)}
              required
            />
          </div>
          <div className="sub-sec">
            <label htmlFor="pincode">Enter Pincode</label>
            <input type="text" onChange={(e) => setPincode(e.target.value)} required/>
          </div>
          <div className="sub-sec">
            <button type="submit" className="cabbtn">Book Cab<div className={classes.root}>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="error">
            Cab is already booked with same address
          </Alert>
        </Snackbar>
      </div></button>
          </div>
        </form>
      </CabContainer>
    </div>
  );
};

export default CabScreen;
