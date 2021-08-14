import React from "react";
// import axios from "axios";

const TestPayment = () => {
  // const razorPayPaymentHandler = async () => {
  //   const API_URL = `http://localhost:5000/razorpay/`;
  //   const orderUrl = `${API_URL}order`;
  //   const response = await axios.get(orderUrl);
  //   const { data } = response;
  //   console.log("App -> razorPayPaymentHandler -> data", data);

  //   const options = {
  //     key: "rzp_test_mCQYP1VXS2KYbo",
  //     name: "veggie",
  //     description: "veggie",
  //     order_id: data.id,
  //     handler: async (response) => {
  //       try {
  //         const paymentId = response.razorpay_payment_id;
  //         const url = `${API_URL}capture/${paymentId}`;
  //         const captureResponse = await axios.post(url, {});
  //         const successObj = JSON.parse(captureResponse.data);
  //         const captured = successObj.captured;
  //         console.log("App -> razorPayPaymentHandler -> captured", successObj);
  //         if (captured) {
  //           console.log("success");
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //     theme: {
  //       color: "#686CFD",
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };

  var options = {
    key: "rzp_test_mCQYP1VXS2KYbo", // Enter the Key ID generated from the Dashboard
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  var rzp1 = new window.Razorpay(options);

  const payNow = (e) => {
    rzp1.open();
    e.preventDefault();
  };

  return (
    <div>
      <button
        // onClick={() => razorPayPaymentHandler()}
        onClick={(e) => payNow(e)}
        className="btn btn-primary"
      >
        Pay Now
      </button>
    </div>
  );
};

export default TestPayment;
