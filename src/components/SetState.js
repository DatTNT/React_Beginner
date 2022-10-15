import React from 'react'

class SetState extends React.Component {
    state = {
        name: 'DavidTran',
        address: 'Hoi Dan IT',
        age: 26
    };
    handleClick = () => {
        console.log(">> click me my button");
        console.log("My name is: ", this.state.name);
        //merge State => react class
        this.setState({
            name: 'David',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }



    handleOnMoverOver = (event) => {
        console.log(event.pageX);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} i'm {this.state.age}

                <button onMouseOver={this.handleOnMoverOver}>HoverMe</button>
                <button onClick={(event) => { this.handleClick(event) }}>ClickMe</button>
            </div>
        )
    }

}

export default SetState