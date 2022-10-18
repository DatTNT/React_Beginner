import React from 'react';

class UserInFor extends React.Component {
    state = {
        name: 'DavidTran',
        address: 'Hoi Dan IT',
        age: 26
    };
    // handleClick = () => {
    //     console.log(">> click me my button");
    //     console.log("My name is: ", this.state.name);
    //     //merge State => react class
    //     this.setState({
    //         name: 'David',
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })

    // }

    handleOnChangeName = (event) => {
        console.log(event.target.value);
        //chuyển đổi trạng thái thì bắt buộc phải gọi đến hàm setState component
        this.setState({ name: event.target.value })

    }
    handleOnChangeAge = (event) => {
        console.log(event.target.value);
        this.setState({ age: event.target.value })

    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        alert('me')
    }

    handleOnMoverOver = (event) => {
        console.log(event.pageX);
    }
    render() {
        return (
            <>
                My name is {this.state.name} i'm {this.state.age}

                <button onMouseOver={this.handleOnMoverOver}>HoverMe</button>
                <br />
                <form onSubmit={(event) => this.handleOnSubmit(event)} >
                    <label htmlFor="">Your name: </label>
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    <label htmlFor="">Your age: </label>
                    <input type="text" value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>

                </form>

            </>




        )

    }



}
export default UserInFor;