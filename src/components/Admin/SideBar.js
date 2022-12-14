import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { SiReactivex, } from 'react-icons/si'
import { AiFillExperiment } from 'react-icons/ai'
import { FiActivity } from "react-icons/fi";
import { Link } from 'react-router-dom'

import sidebarBg from '../../assets/bg2.jpg';
import './SideBar.scss'

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
    return (
        <>

            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <SiReactivex size={'2em'} color={"00bfff"} />
                        <span>TienDatDev</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<AiFillExperiment />}

                        >
                            Dashboard
                            <Link to="/admins" />
                        </MenuItem>

                    </Menu>
                    <Menu iconShape="circle">

                        <SubMenu
                            icon={<FiActivity />}
                            title="Features"
                        >
                            <MenuItem>Qu???n l?? User
                                <Link to="/admins/manage-users" />
                            </MenuItem>
                            <MenuItem>Qu???n l?? b??i quiz</MenuItem>
                            <MenuItem>Qu???n l?? c??u h???i</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 0px',
                        }}
                    >
                        <a
                            href="https://github.com/DatTNT/React_Beginner"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={'1em'} />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                TienDatDev
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>

    )
}

export default SideBar;