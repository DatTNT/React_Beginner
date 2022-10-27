import React, { useState } from 'react'
import AddUserInFor from "./AddUserInFor"
import DisplayInfor from './DisplayInFor';

const SetState = () => {
    //state la 1 bien ojbect
    // state = {
    //     listUser: [
    //        
    //     ]
    // }
    const [listUser, setListUser] = useState([
        { id: 1, name: "TuanAnh", age: "56" },
        { id: 2, name: "HuongNhan", age: "51" },
        { id: 3, name: "HienNhu", age: "12" },
    ])

    const handleAddNewUser = (userObj) => {
        console.log("data parent", userObj)
        // console.log(this.state.listUser);
        setListUser(
            [...listUser, userObj]
        )
    }
    const handleDeleteuser = (userID) => {
        const listUserOnClone = [...listUser];
        const deleteListuser = listUserOnClone.filter((user) => user.id !== userID);
        setListUser(
            deleteListuser
        )

    }


    //Khi muon test 1 ham thì mình clg nó ở sau thằng render luôn hạn chế clg ở trong thằng html
    return (
        <div>

            <AddUserInFor
                handleAddNewUser={handleAddNewUser}

            />
            <br />
            <DisplayInfor
                listUser={listUser}
                handleDeleteuser={handleDeleteuser}
            />

        </div >
    )


}

export default SetState