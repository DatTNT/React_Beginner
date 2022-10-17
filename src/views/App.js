import logo from "./logo.svg";
import "./App.scss";
// import { useDispatch, useSlector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from ".redux/action/counterAction"
import MyComponent from "../components/MyComponent"
import React from "react";
import SetState from '../components/SetState';

class App extends React.Component {


  render() {
    return (
      <>
        <SetState />

      </>

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
