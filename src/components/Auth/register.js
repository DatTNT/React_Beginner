import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postRegister } from '../../services/apiServices';
import './Register.scss';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email.trim().length === 0 && password.trim().length === 0) {
            toast.error('input value is empty')
            return;
        }
        let data = await postRegister(email, username, password);


        //check validate api Create Api
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM)
        }


    }
    const handleSetPassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    }

    return (
        <div className="register-container">
            <div className="header">
                Already have an account
                <div>
                    <button onClick={() => { navigate('/login') }}
                    >Log in
                    </button>
                </div>
            </div>
            <div className="title col-4 mx-auto">
                <div>
                    TypeForm
                </div>
            </div>
            <div className="content">
                Get better data with conversational forms, surveys, quizzes & more.
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text"
                        value={username}
                        className="form-control"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                        value={email}
                        className="form-control"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <div className="showPass">
                        <input type={passwordType}
                            value={password}
                            className="form-control"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className="icon" onClick={() => handleSetPassword()}>
                            {passwordType === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttonRegister col-4 mx-auto">
                <button onClick={(event) => handleSubmit(event)}>
                    REGESTER
                </button>
            </div>
        </div>
    )
}

export default Register;