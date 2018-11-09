// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {

  something = () => {
    console.log('Entering password...');
  }
  render () {
    return (
      <div>
      <input type="password" onkeyUp={this.something} />
      </div>
    )
  }
}

export default Keypad;
