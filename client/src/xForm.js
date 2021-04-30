import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form id='form' onSubmit={onSubmit}>

      <div className="form-group">
        <label className="form-label" htmlFor="name">Name:</label>
        <br />
        <input
          className="form-control"
          id="name" />
      </div>
      <br />

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email address:</label>
        <br />
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <br />

      <div className="form-group">
        <label className="form-label" htmlFor="message">Message:</label>
        <br />
        <textarea
          rows="1"
          cols="26"
          name="reply"
          className="form-control"
          id="message">
        </textarea>
      </div>
      <br />
      <br />

      <button id='submit-button' type="submit">
        Submit
        </button>

    </form>
  );
};
export default Form;