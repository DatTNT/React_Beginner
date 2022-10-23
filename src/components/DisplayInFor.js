import React from 'react';
import './DisplayInFor.scss';
import logo from '../views/logo.svg'

class DisplayInFo extends React.Component {

    constructor(props) {
        console.log(">>> call constructor: 1")
        super(props);
        this.state = {
            isShowListUser: true
        }
    }
    componentDidMount() {
        console.log(">>> call me component did mount")

        setTimeout(() => {
            document.title = "TienDat"
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(">>> call me component did update", this.props, prevProps);
        if (this.props.listUser !== prevState.listUser) {
            if (this.props.listUser.length > 5) {
                alert("Numer of users are 5")
            }
        }
    }

    handleOnHideShow = () => {
        // this.state.isShowListUser ? this.setState({ isShowListUser: false }) : this.setState({ isShowListUser: true }); Dat viet
        this.setState({ isShowListUser: !this.state.isShowListUser });

    }


    render() {
        console.log("call me render")
        //destructing array/object
        const { listUser } = this.props;
        // console.log(listUser);
        return (
            <div className='display-infor-container'>
                <img src={logo} alt="" />
                <div>
                    <span onClick={() => { this.handleOnHideShow() }}>

                        {this.state.isShowListUser === true ? "Hide list of a Users:" : "Hint list of a Users:"}
                    </span>
                </div>
                {/* //dau && laf có nghĩa luôn luôn đúng khi dùng phép so sánh */}
                {this.state.isShowListUser &&
                    <>
                        {listUser.map((user) => {
                            // console.log(user)
                            //"+" this is convert String to Number
                            return (
                                <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                    <div>This name: {user.name}</div>
                                    <div>This age: {user.age} </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteuser(user.id)}>Delete</button>
                                    </div>
                                    <hr />

                                </div>

                            )
                        })}
                    </>
                }
            </div>
        )
    }
}
export default DisplayInFo;