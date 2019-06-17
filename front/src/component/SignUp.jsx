import React, {Component} from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordcheck: "",
            name: "",
            lastname: ""
        };
    }

    updateField = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        console.log(JSON.stringify(this.state));
        e.preventDefault();
    }
    
    render() {
    return(
    <div>
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
            <input placeholder="email" type="email" name="email" onChange={this.updateField} /> <br/>
            <input placeholder="password" type="password" name="password" onChange={this.updateField} /> <br/>
            <input placeholder="password again" type="password" name="passwordcheck" onChange={this.updateField} /> <br/>
            <input placeholder="name" type="name" name="name" onChange={this.updateField} /> <br/>
            <input placeholder="last name" type="lastname" name="lastname" onChange={this.updateField} /> <br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    );
  }
}

export default Signup;