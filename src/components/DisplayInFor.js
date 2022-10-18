import React from 'react';

class DisplayInFo extends React.Component {

    state = {
        isShowListUser: true
    }

    handleOnHideShow = () => {
        // this.state.isShowListUser ? this.setState({ isShowListUser: false }) : this.setState({ isShowListUser: true }); Dat viet
        this.setState({ isShowListUser: !this.state.isShowListUser });

    }

    render() {
        //destructing array/object
        const { listUser } = this.props;
        console.log(listUser);
        return (
            <>
                <div>
                    <span onClick={() => { this.handleOnHideShow() }}>

                        {this.state.isShowListUser === true ? "Hide list of a Users:" : "Hint list of a Users:"}
                    </span>
                </div>
                {/* //dau && laf có nghĩa luôn luôn đúng khi dùng phép so sánh */}
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {
                            console.log(user)
                            //"+" this is convert String to Number
                            return (
                                <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                    <div>This name: {user.name}</div>
                                    <div>This age: {user.age} </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </>
        )
    }
}
export default DisplayInFo;