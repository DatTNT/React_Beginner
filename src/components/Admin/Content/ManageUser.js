
import ModalCreateUser from './ModalCreateuser';
import '../Content/ManageUser.scss';

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
                    </div>
                    <ModalCreateUser />
                </div>
            </div>
        </>
    )
}

export default ManageUser;