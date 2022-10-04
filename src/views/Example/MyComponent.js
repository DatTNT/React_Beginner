import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "TienDat",
    age: "4",
  };
  handleClickButton = () => {
    // console.log("hit the button");
    alert("click me");
  };

  handleOnChangeName = (event) => {
    // console.log(
    //   event.target.value,
    //   "event target: ",
    //   event.target,
    //   "event object",
    //   event
    // );
    this.setState({
      name: event.target.value,
      age: "22 ages",
    });
  };

  render() {
    let name = "Tien Dat";

    console.log("call render:", this.state);
    return (
      <div className="abc">
        <div className="a">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          Hello guys, My name is {this.state.name}
        </div>
        <div className="b">My ages is {this.state.age}</div>
        <div className="c">
          <button onClick={() => this.handleClickButton()}>click me</button>
          {/* trong thằng onClick muốn gọi hàm handleClickButton thì bắt buộc phải tạo thêm 
          1 arrow function trong thằng handleClickButton để nó hoạt động  */}
        </div>
      </div>
    );
  }
}

export default MyComponent;
