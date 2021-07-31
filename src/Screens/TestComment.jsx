import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions/cartActions";

const TestComment = () => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    dispatch(addComment(99, comment));
  };

  return (
    <form onSubmit={handleComment}>
      <h1>Comment Screen</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button>Send Comment</button>
    </form>
  );
};

export default TestComment;
