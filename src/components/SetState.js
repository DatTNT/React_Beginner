import React from 'react'
import AddUserInFor from "./AddUserInFor"
import DisplayInfor from './DisplayInFor';

class SetState extends React.Component {
    //state la 1 bien ojbect
    state = {
        listUser: [
            { id: 1, name: "TuanAnh", age: "56" },
            { id: 2, name: "HuongNhan", age: "51" },
            { id: 3, name: "HienNhu", age: "12" },
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log("data parent", userObj)
        console.log(this.state.listUser);
        this.setState({
            listUser: [...this.state.listUser,userObj ]

        })
    }
    render() {
        return (
            <div>
                <AddUserInFor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUser={this.state.listUser}
                >
                </DisplayInfor>
            </div >
        )
    }

}

export default SetState