import React from 'react'
import UserInFor from "./UserInFor"
import DisplayInfor from './DisplayInFor';

class SetState extends React.Component {
    //state la 1 bien ojbect
    state = {
        listUser: [
            { id: 1, name: "TuanAnh", age: "56" },
            { id: 2, name: "HuongNhan", age: "51" },
            { id: 3, name: "HienNhu", age: "19" },
        ]
    }
    render() {
        return (
            <div>
                <UserInFor />
                <br />
                <DisplayInfor
                    listUser={this.state.listUser}
                    user={this.state.listUser} >
                </DisplayInfor>
            </div >
        )
    }

}

export default SetState