// class component 
//function component
import React from 'react';
class MyComponent extends React.Component {
    // tập hợp các khối html sau đáy chuyển nó thành giao diện. Hầm render kế thừa thằng react.component
    //JSX tra 1 phan tu html
    render() {
        return (

            <div>

                my first component<br />
                {Math.random()}

            </div>


        );//tra lại 1 biến string or number
    }




}

export default MyComponent;

