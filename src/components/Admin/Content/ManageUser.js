import { useState } from 'react'
import ModalCreateUser from './ModalCreateUser';
import '../Content/ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useEffect } from "react";
import { getAllUser, fetUserWithPaginate } from "../../../services/apiServices"

import TableUser from "./TableUser"
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';
import TableUserPaginate from './TableUserPaginate';

const ManageUser = (props) => {

    const LIMIT_USER = 3;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [showModelCreateUser, setshowModelCreateUser] = useState(false);
    const [showModelUpdateUser, setshowModelUpdateUser] = useState(false);
    const [showModelViewUser, setshowModelViewUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [showModelDeteleUser, setshowModelDeteleUser] = useState(false);
    const [dataDatele, setDataDatele] = useState({});
    const [listUser, setListUsers] = useState([]);
    //
    useEffect(() => {

        fetchListUser()
        fetchListUserWithPaginate(1)
    }, []);

    //Btn Update
    const handleClickBtnUpdate = (user) => {
        setshowModelUpdateUser(true)
        setDataUpdate(user);
        console.log("update user: ", user);
    }



    const handleClickBtnView = (user) => {
        setshowModelViewUser(true)
        setDataUpdate(user);
        console.log("update user: ", user);
    }


    const handleClickBtnDelete = (user) => {
        setDataDatele(user)
        setshowModelDeteleUser(true)
    }




    const resetUpdateData = () => {
        setDataUpdate({});
    }

    const fetchListUser = async () => {
        let res = await getAllUser();
        // console.log(res);
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    const fetchListUserWithPaginate = async (page) => {
        let res = await fetUserWithPaginate(page, LIMIT_USER);
        // console.log(res);
        if (res.EC === 0) {
            console.log('res.dt = ', res.DT.users);
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
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
                        {/* <TableUser
                            
                        /> */}
                        <TableUserPaginate
                            listUsers={listUser}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                            handleClickBtnView={handleClickBtnView}
                            handleClickBtnDelete={handleClickBtnDelete}
                            fetchListUserWithPaginate={fetchListUserWithPaginate}
                            pageCount={pageCount}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                    <ModalCreateUser
                        show={showModelCreateUser}
                        setShow={setshowModelCreateUser}
                        fetchListUsers={fetchListUser}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                    />

                    <ModalUpdateUser
                        show={showModelUpdateUser}
                        setShow={setshowModelUpdateUser}
                        dataUpdate={dataUpdate}
                        resetUpdateData={resetUpdateData}
                        fetchListUsers={fetchListUser}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                    />

                    <ModalViewUser
                        show={showModelViewUser}
                        setShow={setshowModelViewUser}
                        dataUpdate={dataUpdate}
                        resetUpdateData={resetUpdateData}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                    />
                    <ModalDeleteUser
                        show={showModelDeteleUser}
                        setShow={setshowModelDeteleUser}
                        dataDelete={dataDatele}
                        fetchListUsers={fetchListUser}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                    />

                </div>
            </div>
        </>
    )
}

export default ManageUser;