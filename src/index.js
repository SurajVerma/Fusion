import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// const element = <div className="container">Hello World!</div>;
// React.createElement(
//   "div",
//   { className: "container" },
//   "hello world!!"
// );
// ReactDOM.render(element, root);

// (function tick() {
//   const time = new Date().toLocaleTimeString();
//   const element = <div>It is {time}</div>;
//   ReactDOM.render(element, root);
//   setInterval(tick, 1000);
// })();

// const state = { eventCount: 0, username: "" };

// function App() {
//   return (
//     <div>
//       <p>There have been {state.eventCount} events</p>
//       <p>
//         <button onClick={increment}>Click Here</button>
//       </p>
//       <p>You typed: {state.username}</p>
//       <p>
//         <input onChange={updateUsername}/>
//       </p>
//     </div>
//   );
// }

// function increment() {
//   setState({
//     eventCount: state.eventCount + 1
//   });
// }
// function updateUsername(event){
//   setState({
//     username : event.target.value
//   })
// }
// function setState(newState) {
//   Object.assign(state, newState);
//   renderApp();
// }

// function renderApp() {
//   ReactDOM.render(<App />, root);
// }
// renderApp();

class StopWatch extends React.Component {
  state = { lapse: 0, running: false };
  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({ lapse: Date.now() - startTime });
        });
      }
      return { running: !state.running };
    });
  };
  handleClearClick = () => {
    clearInterval(this.timer);
    this.setState({ lapse: 0, running: false });
  };
  render() {
    const { lapse, running } = this.state;
    const buttonStyles = {
      border: "1px solid #ccc",
      background: "#fff",
      fontSize: "2em",
      padding: 15,
      margin: 5,
      width: 200
    };
    return (
      <div style={{ textAlign: "center" }}>
        <label style={{ fontSize: "5em", display: "block" }}> {lapse} ms</label>
        <button onClick={this.handleRunClick} style={buttonStyles}>
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleClearClick} style={buttonStyles}>
          Clear
        </button>
      </div>
    );
  }
}

const element = <StopWatch />;
ReactDOM.render(element, root);
