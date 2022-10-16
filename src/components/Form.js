import React from 'react'

class From extends React.Component {

    handleChangeName = (event) => {
        console.log(event.target.value);
    }

    render() {

        return (
            <From>

                <input type="text" />
                <button onChange={(event) => this.handleChangeName(event)}>Submit</button>

            </From>
        )
    }

}



export default From