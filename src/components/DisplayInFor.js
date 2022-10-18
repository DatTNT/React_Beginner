import React from 'react';

class DisplayInFo extends React.Component {

    render() {
        //destructing array/object
        const { listUser } = this.props;
        console.log(listUser);
        return (
            <>
                {listUser.map((user) => {
                    console.log(user)
                    return (
                        <div key={user.id}>
                            <div>This name: {user.name}</div>
                            <div>This age: {user.age} </div>
                            <hr />
                        </div>
                    )


                })}

            </>
        )
    }
}
export default DisplayInFo;