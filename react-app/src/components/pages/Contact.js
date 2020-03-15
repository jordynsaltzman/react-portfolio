import React from "react";
import "./pages.css";
import Container from "../building_components/Container";

const Contact = () => {
  return (
    <Container>
      <form>
        <label className="formLabel" for="name">
          name
        </label>
        <input className="formInput" name="name" type="text" id="name" required></input>
        <label className="formLabel" for="email">
          email
        </label>
        <input className="formInput" name="email" type="email" id="email" required></input>
        <label className="formLabel" for="message">
          Message
        </label>
        <textarea
          className="formTextarea"
          name="message"
          id="message"
          required
        ></textarea>
        <button className="formBtn" type="submit">
          Send
        </button>
      </form>
    </Container>
  );
};

export default Contact;
