import React from 'react'

class SetState extends React.Component {
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
        this.setState({ name: event.target.value })

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
            <div>
                My name is {this.state.name} i'm {this.state.age}

                <button onMouseOver={this.handleOnMoverOver}>HoverMe</button>
                <br />
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => { this.handleOnChangeName(event) }}

                    />
                    <button >Submit</button>
                </form>
            </div>
        )
    }

}

export default SetState