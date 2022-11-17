import { useEffect } from "react";
import { useState } from "react"
import { getAllUser } from "../../../services/apiServices"

const Tableuser = (props) => {

    const { listUsers } = props;

    // console.log("hehehehhe");

    return (
        <>
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&

                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td scope="row">{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button className="btn btn-warning mx-3" onClick={() => props.handleClickBtnUpdate(item)}>Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan="4"> Not Found Data</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )

}

export default Tableuser