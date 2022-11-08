import SideBar from './SideBar';
import './Admin.scss';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useState } from 'react'
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    return (

        <div className="admin-container">
            <div className="admin-sideBar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                    content goes here
                </div>
                <div className="admin-main">
                    hehe
                </div>

            </div>
        </div>
    )
}
export default Admin