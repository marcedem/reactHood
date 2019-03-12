import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

/* 


function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

*/

const OldTitle = props => {
  // props.nyName = "Edson";
  console.log(Object.getOwnPropertyDescriptor(props, "title"));
  return React.createElement("h2", null, props.title);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.state = { title: "Hello" };
  }

  componentDidMount() {
    console.log(this.titleRef.current);
  }
  changeTitle() {
    this.setState({ title: "Hola Amigo" });
  }
  render() {
    const el = React.createElement("h1", null, "Hello PlayGround");
    console.log(Object.isExtensible(el));
    console.log(Object.isFrozen(el));
    console.log(Object.isSealed(el));
    return React.createElement("div", null, [
      React.createElement("h1", { key: 1 }, this.state.title),
      React.createElement(
        "button",
        { key: 2, onClick: () => this.changeTitle() },
        "Click me"
      )
    ]);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
