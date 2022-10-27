import React, { useState } from 'react';

const AddUserInFor = (props) => {
    // state = {
    //     name: 'DavidTran',
    //     address: 'Hoi Dan IT',
    //     age: 26
    // };

    const [userInfor, setUserInfor] = useState({
        name: 'DavidTran',
        address: 'Hoi Dan IT',
        age: 26
    })







    const handleOnChangeName = (event) => {
        // console.log(event.target.value);
        //chuyển đổi trạng thái thì bắt buộc phải gọi đến hàm setState component
        setUserInfor({ name: event.target.value })

    }
    const handleOnChangeAge = (event) => {
        // console.log(event.target.value);
        setUserInfor({ age: event.target.value })

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: userInfor.name,
            age: userInfor.age
        });

    }

    const handleOnMoverOver = (event) => {
        // console.log(event.pageX);
    }


    return (
        <>
            My name is {userInfor.name} i'm {userInfor.age}

            <button onMouseOver={handleOnMoverOver}>HoverMe</button>
            <br />
            <form onSubmit={(event) => handleOnSubmit(event)}  >
                <label htmlFor="">Your name: </label>
                <input type="text" value={userInfor.name}
                    onChange={(event) => handleOnChangeName(event)}
                />
                <label htmlFor="">Your age: </label>
                <input type="text" value={userInfor.age}
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>

            </form>

        </>




    )

}




export default AddUserInFor;