import React, {Component} from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
        profile: {
            email:  "homer.simpson@wildcodeschool.fr",
            name:  "Homer",
            lastname:  "Simpson"
      }
    }
  }

  render() {
    return(
      <div>
        <h1>Profile</h1>
        <List>
            <ListItem>
                <ListItemText primary="email" secondary={this.state.profile.email}/>
            </ListItem>
        </List>
        <Link to="signin">
            <Button type="submit" value="Sign Out" onClick={this.redirectToDefault} >Submit</Button>
        </Link>
      </div>
    );
  }
}

export default SignUp;