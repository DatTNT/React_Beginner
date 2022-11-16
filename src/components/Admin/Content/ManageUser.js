import { useState } from 'react'
import ModalCreateUser from './ModalCreateUser';
import '../Content/ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useEffect } from "react";
import { getAllUser } from "../../../services/apiServices"

import TableUser from "./TableUser"

const ManageUser = (props) => {
    const [showModelCreateuser, setShowModelCreateuser] = useState(false);

    const [listUser, setListUsers] = useState([]);
    //
    useEffect(() => {

        fetchListUser()
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUser();
        // console.log(res);
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    return (
        <>
            <div className="manage-user-container">
                <div className="title">
                    Manage User
                </div>
                <div className="users-content">
                    <div className="btn-add-new">
                        {/* class button bootstrap */}
                        <button className="btn btn-primary" onClick={() => setShowModelCreateuser(true)}>
                            <FcPlus />
                            Add new users
                        </button>
                    </div>
                    <div className="table-users-container">
                        <TableUser listUsers={listUser} />
                    </div>
                    <ModalCreateUser
                        show={showModelCreateuser}
                        setShow={setShowModelCreateuser}
                        fetchListUsers={fetchListUser}
                    />
                </div>
            </div>
        </>
    )
}

export default ManageUser;