import React from "react";
import axios from "axios";

const TestPayment = () => {
  const razorPayPaymentHandler = async () => {
    const API_URL = `http://localhost:5000/razorpay/`;
    const orderUrl = `${API_URL}order`;
    const response = await axios.get(orderUrl);
    const { data } = response;
    console.log("App -> razorPayPaymentHandler -> data", data);

    const options = {
      key: "rzp_test_mCQYP1VXS2KYbo",
      name: "veggie",
      description: "veggie",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await axios.post(url, {});
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          console.log("App -> razorPayPaymentHandler -> captured", successObj);
          if (captured) {
            console.log("success");
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <button
        onClick={() => razorPayPaymentHandler()}
        className="btn btn-primary"
      >
        Pay Now
      </button>
    </div>
  );
};

export default TestPayment;
