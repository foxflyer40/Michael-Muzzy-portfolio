import React from 'react';

class Formtwo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      message: "",
      isSubmitting: false,
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value })
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" })
    console.log('form is reset')
  }

  submitForm = (event) => {
    event.preventDefault();
    console.log("1- " + this.state.isSubmitting)
    if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
      return alert('Please fill in all of the fields then re-submit.')
    }
    fetch(('/App/Formtwo'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: this.state.name, email: this.state.email, message: this.state.message })
    }).then(res => res.json()).then((jsonObj) => {
      this.setState({
        isSubmitting: jsonObj.status
      })
    })
    console.log("2- " + this.state.isSubmitting)
   
    console.log(this.jsonObj.status)
 
    // this.resetForm();
  }

  render() {
    return (
      <form id='contactInputs' onSubmit={this.submitForm}>


        <label className="formLabel" >
          Name:
          <br />
          <input
            type='text'
            id="formName"
            value={this.state.name}
            onChange={this.onNameChange}>
          </input>
        </label>

        <br />


        <label className="formLabel" >Email address:
          <br />
          <input
            type="email"
            id="formEmail"
            placeholder="name@example.com"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
        </label>
        <br />


        <label className="form-label" >Message:
          <br />
          <textarea id="formMessage"
            value={this.state.message}
            onChange={this.onMessageChange} >
          </textarea>
        </label>
        <br />
        <br />

        <button id='submit-button' type="submit">
          Submit
        </button>

      </form>
    );
  };



}
export default Formtwo;