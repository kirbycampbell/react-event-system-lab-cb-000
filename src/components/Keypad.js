// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {

  something = () => {
    console.log('Entering password...');
  }
  render () {
    return (
      <input type="password" onkeyUp={this.} />
    )
  }
}

export default Keypad;
