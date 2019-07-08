import React, {Component} from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'example@example.com',
      password: 'mypassword',
    }
  }

  updateField = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  handleSubmit = (e) => {
    fetch("/auth/signin",
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
          }),
          err  =>  this.setState({
            flash:  err.flash,
          })
    )
    console.log(`information submitted: ${JSON.stringify(this.state)}`);
    e.preventDefault();
  }

  render() {
    return(
      <div>
        {/* <Snackbar
          open={this.state.open}
          autoHideDuration={5000}
          onClose={this.handleClose}
          message={<p>{this.state.flash}</p>}
        /> */}
        <h1>Sign In</h1>
        <form action="POST" onSubmit={this.handleSubmit}>
          <TextField type="email" label="Email" name="email" onChange={this.updateField} placeholder='example@example.com'/>
          <br/>
          <TextField type="password" label="Password" name="password" onChange={this.updateField} placeholder='Password'/>
          <br/>
          <Link to="/profile">
            <Button type="submit" value="submit">Submit</Button>
          </Link>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default SignUp;