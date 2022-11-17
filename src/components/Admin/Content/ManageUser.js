import { useState } from 'react'
import ModalCreateUser from './ModalCreateUser';
import '../Content/ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useEffect } from "react";
import { getAllUser } from "../../../services/apiServices"

import TableUser from "./TableUser"
import ModalUpdateUser from './ModalUpdateUser';

const ManageUser = (props) => {
    const [showModelCreateUser, setshowModelCreateUser] = useState(false);
    const [showModelUpdateUser, setshowModelUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [listUser, setListUsers] = useState([]);
    //
    useEffect(() => {

        fetchListUser()
    }, []);

    const handleClickBtnUpdate = (user) => {
        setshowModelUpdateUser(true)
        setDataUpdate(user);
        console.log("update user: ", user);
    }
    const fetchListUser = async () => {
        let res = await getAllUser();
        // console.log(res);
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    // console.log("check data: ", dataUpdate)
    return (
        <>
            <div className="manage-user-container">
                <div className="title">
                    Manage User
                </div>
                <div className="users-content">
                    <div className="btn-add-new">
                        {/* class button bootstrap */}
                        <button className="btn btn-primary" onClick={() => setshowModelCreateUser(true)}>
                            <FcPlus />
                            Add new users
                        </button>
                    </div>
                    <div className="table-users-container">
                        <TableUser
                            listUsers={listUser}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                        />
                    </div>
                    <ModalCreateUser
                        show={showModelCreateUser}
                        setShow={setshowModelCreateUser}
                        fetchListUsers={fetchListUser}
                    />
                    <ModalUpdateUser
                        show={showModelUpdateUser}
                        setShow={setshowModelUpdateUser}
                        dataUpdate={dataUpdate}
                    />
                </div>
            </div>
        </>
    )
}

export default ManageUser;