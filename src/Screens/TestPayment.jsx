import React from "react";

const TestPayment = () => {
  var options = {
    key: "rzp_test_mCQYP1VXS2KYbo", // Enter the Key ID generated from the Dashboard
    // key_secret: "Zj6I7kFH6JTbJy7tEDrVLl0p",
    amount: "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Veggie",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: localStorage.getItem("order_id"),
    // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
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
      <button onClick={(e) => payNow(e)} className="btn btn-primary">
        Pay Now
      </button>
    </div>
  );
};

export default TestPayment;
