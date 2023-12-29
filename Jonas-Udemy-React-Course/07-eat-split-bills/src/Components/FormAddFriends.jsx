import React from "react";
import Button from "./Button";

const FormAddFriends = () => {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">Friend Name</label>
      <input type="text" id="name" />
      <label>Image Url</label>
      <input type="text" id="name" />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriends;
