import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      message: "",
      isSubmitting: false,
    };
  }

  onNameChange = (event) =>{
  this.setState({  name: event.target.value })
  };

  onEmailChange = (event) =>{
    this.setState({  email: event.target.value })
    };

    onMessageChange = (event) =>{
      this.setState({  message: event.target.value })
      };

      resetForm = () => {
        this.setState({name: "", email: "", message: ""})
      }

submitForm = (event) => {
  event.preventDefault();
  if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
    return alert('Please fill in all of the fields then re-submit.')
  }
  fetch(('/newContact'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: this.state.name, email: this.state.email, message: this.state.message})
  }).then(res=>res.json()).then((jsonObj)=>{
    this.setState({
      isSubmitting: jsonObj.status
    })
  })
  this.resetForm();
}

  render() {
    return (
      <form id='form' onSubmit={this.submitForm}>

        <div className="form-group">
          <label className="form-label" htmlFor="name">Name:</label>
          <br />
          <input
            className="form-control"
            type='name'
            name='name'
            id="name"
            value={this.state.values.name}
            onChange={this.handleInputChange}
            title='Name'
            required
          />
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
            name="email"
            value={this.state.values.email}
            onChange={this.handleInputChange}
            title="Email"
            required
          />
        </div>
        <br />

        <div className="form-group">
          <label className="form-label" htmlFor="message">Message:</label>
          <br />
          <textarea
            rows="1"
            cols="26"
            name="message"
            className="form-control"
            id="message">
            value={this.state.values.message}
            onChange={this.handleInputChange}
            title="Message"
            required
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

  

}
export default Form;