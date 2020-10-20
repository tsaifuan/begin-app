import React from "https://unpkg.com/es-react";

export class App extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    //@ts-ignore
    this.setState({
      time: new Date(),
    });
  }

  render() {
    //@ts-ignore
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>;
  }
}
