import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { putUpdateUser } from "../../../services/apiServices"
import { useEffect } from 'react';
//Check oject
import _ from 'lodash'

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate, currentPage } = props; //variable props is object then use {} 


    const handleClose = () => {
        setShow(false)
        setEmail("")
        setUsername("")
        setPassword("")
        setRole("USER")
        setImage("")
        setPreviewImage("")
        props.resetUpdateData()
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");


    useEffect(() => {
        console.log('run useEffect', dataUpdate);
        if (!_.isEmpty(dataUpdate)) {
            //update State
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            // setPassword("")
            setRole(dataUpdate.role)
            setImage("")
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }

        }
    }, [dataUpdate])

    //Preview Image When clicked button
    const handleUpload = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }

    //validateEmail
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    //Submit Create New user
    const handleSubmitCreateUser = async () => {
        //validate user
        const isValidEmail = validateEmail(email);

        //check Email
        if (!isValidEmail) {
            toast.error('InvalidEmail')
            // toast.success('EmailSus')
            return;
        }


        // import 
        let data = await putUpdateUser(dataUpdate.id, username, role, image);

        console.log(">>>> component res: ", data);

        //check validate api Create Api
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // await props.fetchListUsers();
            await props.fetchListUserWithPaginate(currentPage);

        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    // console.log('check check Render: ');

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update new Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label" >Email</label>
                            <input type="email"
                                className="form-control"
                                value={email}
                                disabled={true}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label" >Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                disabled={true}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FiPlus />
                                Upload File Image
                            </label>
                            <input type="file"
                                id="labelUpload"
                                onChange={(event) => handleUpload(event)}
                                hidden
                            />

                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>previewImage</span>
                            }


                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalUpdateUser;