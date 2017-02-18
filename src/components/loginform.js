import React, { Component } from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';

class LoginForm extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className="section-box">
          <h3 className="section-header">
            Login
          </h3>

          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Paper>
              <Formsy.Form>
                <FormsyText
                  floatingLabelText="Email address"
                  hintText="Please enter a valid email address"
                  name="email"
                  validationErrors={{
                      isEmail: 'This doesn’t look like a valid email address.'
                  }}
                  validations="isEmail"
                  required
                />
                <RaisedButton
                  type="submit"
                  label="Submit"
                />
              </Formsy.Form>
            </Paper>
          </MuiThemeProvider>
        </div>
    )
  }
}

export default LoginForm;
