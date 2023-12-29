import React from "react";
import Button from "./Button";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill With X</h2>
      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />

      <label>X's expense</label>
      <input type="text" disabled />

      <label>Who Is Paying The Bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
