import React, { Component } from 'react';

import StoryList from '../components/storylist';
import LoginForm from '../components/loginform';

class home extends Component {

  render() {
    return (
      <div>
        <h3>News</h3>
        <LoginForm></LoginForm>
        <StoryList></StoryList>
      </div>

    );
  }
}

export default home;
