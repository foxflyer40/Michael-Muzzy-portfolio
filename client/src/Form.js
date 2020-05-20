import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <br />
        <input className="form-control" id="name" />
      </div>
     
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <br />
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Message</label>
        <br />
        <input
          className="form-control"
          id="message"
         />
      </div>
      <br />
      
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
     
    </form>
  );
};
export default Form;