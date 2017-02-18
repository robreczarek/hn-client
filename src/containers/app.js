import React, { Component } from 'react';

class app extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>Dark HN Client</h2>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default app;
