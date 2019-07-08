import React, {Component} from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'example@example.com',
      password: 'mypassword',
      verificationPassword: 'mypassword',
      name: 'jon',
      lastname: 'doe',
      flash: '',
      open: false  
    }
  }

  updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  handleSubmit = (e) => {
    fetch("/auth/signup",
    {
          method:  'POST',
          headers:  new Headers({
                'Content-Type':  'application/json'
          }),
          body:  JSON.stringify(this.state),
    })
    .then(res  =>  res.json())
    .then(
          res  =>  this.setState({
            flash:  res.flash,
            open: true
          }),
          err  =>  this.setState({
            flash:  err.flash,
            open: true
          })
    )
    console.log(`information submitted: ${JSON.stringify(this.state)}`);
    e.preventDefault();
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      open: false
    });
  }

  render() {
    return(
      <div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={5000}
          onClose={this.handleClose}
          message={<p>{this.state.flash}</p>}
        />
        <h1>Sign Up</h1>
        <form action="POST" onSubmit={this.handleSubmit}>
          <TextField type="email" label="Email" name="email" onChange={this.updateField} placeholder='example@example.com'/>
          <br/>
          <TextField type="password" label="Password" name="password" onChange={this.updateField} placeholder='Password'/>
          <br/>
          <TextField type="password" label="Password Copy" name="verificationPassword" onChange={this.updateField} placeholder='Password Copy'/>
          <br/>
          <TextField type="name" name="name" label="Name" onChange={this.updateField} placeholder='Name'/>
          <br/>
          <TextField type="lastname" label="Last Name" name="lastname" onChange={this.updateField} placeholder='Last Name'/>
          <br/>
          <Button type="submit" value="submit" >Submit</Button>

        </form>
      </div>
    );
  }
}

export default SignUp;