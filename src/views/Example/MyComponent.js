import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "TienDat",
    age: "4",
  };

  render() {
    let name = "Tien Dat";

    return (
      <div className="abc">
        <div className="a">Hello guys, My name is {this.state.name}</div>
        <div className="b">My ages is {this.state.age}</div>
      </div>
    );
  }
}

export default MyComponent;
