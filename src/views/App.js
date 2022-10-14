import logo from "./logo.svg";
import "./App.scss";
// import { useDispatch, useSlector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from ".redux/action/counterAction"
import MyComponent from "../components/MyComponent"
import React from "react";

class App extends React.Component {
  state = {
    name: 'DavidTran',
    address: 'Hoi Dan IT',
    age: 26
  };


  render() {
    return (
      <div>
        My name is {this.state.name} i'm from {this.state.address}
      </div>

    );
  }
}






// const App = () => {
//   const count = useSlector(state => state.counter.count);
//   const dispatch = useDispatch(); 
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello world với Eric &amp;Hỏi Dân IT
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch}>Increase</button>
//       </header>
//     </div>
//   );
// }

export default App;
