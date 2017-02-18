import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';

function mapStateToProps(state) {
  return {
    stories: state.stories
  }
}

class StoryList extends Component {

  render() {
    return (
      <div className="section-box">
        <h3 className="section-header">
          Stories
        </h3>

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Paper>
            <div>
              <ul>
                <li>Story One</li>
                <li>Story Two</li>
                <li>Story Three</li>
              </ul>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default connect(mapStateToProps)(StoryList);
