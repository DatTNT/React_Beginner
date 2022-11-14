import { useState } from 'react'
import ModalCreateUser from './ModalCreateUser';
import '../Content/ManageUser.scss';
import { FcPlus } from 'react-icons/fc';

const ManageUser = (props) => {
    const [showModelCreateuser, setShowModelCreateuser] = useState(false);


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
                        Table User
                    </div>
                    <ModalCreateUser
                        show={showModelCreateuser}
                        setShow={setShowModelCreateuser}
                    />
                </div>
            </div>
        </>
    )
}

export default ManageUser;