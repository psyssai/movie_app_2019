import React from 'react';

class App extends React.Component{
  state = {
    count: 0
  };

  // add
  add = () => {
    //this.setState({count: this.state.count + 1});
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    //this.setState({count: this.state.count - 1});
    this.setState(current => ({ count: current.count - 1 }));
  };

  render(){
    return <div />;
  }
}

export default App;
