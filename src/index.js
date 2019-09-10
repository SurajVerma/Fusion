import React from "react";
import ReactDOM from "react-dom";
import VanillaTilt from "vanilla-tilt";

import "./styles.css";

// class StopWatch extends React.Component {
//   state = { lapse: 0, running: false };
//   handleRunClick = () => {
//     this.setState(state => {
//       if (state.running) {
//         clearInterval(this.timer);
//       } else {
//         const startTime = Date.now() - this.state.lapse;
//         this.timer = setInterval(() => {
//           this.setState({ lapse: Date.now() - startTime });
//         });
//       }
//       return { running: !state.running };
//     });
//   };
//   handleClearClick = () => {
//     clearInterval(this.timer);
//     this.setState({ lapse: 0, running: false });
//   };
//   render() {
//     const { lapse, running } = this.state;
//     const buttonStyles = {
//       border: "1px solid #ccc",
//       background: "#fff",
//       fontSize: "2em",
//       padding: 15,
//       margin: 5,
//       width: 200
//     };
//     return (
//       <div style={{ textAlign: "center" }}>
//         <label style={{ fontSize: "5em", display: "block" }}> {lapse} ms</label>
//         <button onClick={this.handleRunClick} style={buttonStyles}>
//           {running ? "Stop" : "Start"}
//         </button>
//         <button onClick={this.handleClearClick} style={buttonStyles}>
//           Clear
//         </button>
//       </div>
//     );
//   }
// }

// const element = <StopWatch />;
// ReactDOM.render(element, root);

//Using class component with React
// class Counter extends React.Component {
//   state = { count: 0 };
//   handleClick = () => {
//     this.setState(({ count }) => ({
//       count: count + 1
//     }));
//   };
//   render() {
//     return <button onClick={this.handleClick}>{this.state.count}</button>;
//   }
// }
// ReactDOM.render(<Counter />, document.getElementById("root"));

// Manipulate the Dom with React refs
class Tilt extends React.Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    });
    console.log(this.rootNode);
  }
  render() {
    return (
      <div ref={node => (this.rootNode = node)} className="tilt-root">
        <div className="tilt-child">
          <div {...this.props} />
        </div>
      </div>
    );
  }
}

const element = (
  <div className="totally-centered">
    <Tilt>
      <div className="totally-centered">Tilt It</div>
    </Tilt>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
