
import ModalCreateUser from './ModalCreateuser';

const ManageUser = (props) => {
    return (
        <>
            <div className="manage-usr-container">
                <div className="title">
                    Manage User
                </div>
                <div className="users-content">
                    <div>
                        <button>Add new users</button>
                    </div>
                    <div>
                        Table User
                        <ModalCreateUser />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageUser;