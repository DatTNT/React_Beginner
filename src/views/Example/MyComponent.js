import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "TienDat",
    age: "4",
  };
  handleClickButton = () => {
    console.log("hit the button");
    alert("click me");
  };
  render() {
    let name = "Tien Dat";

    return (
      <div className="abc">
        <div className="a">Hello guys, My name is {this.state.name}</div>
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
