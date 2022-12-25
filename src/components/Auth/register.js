import { useState } from "react";
import { AiFillEye } from 'react-icons/ai'
import './Register.scss';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passShow, setPassShow] = useState(false);

    return (
        <div className="register-container">
            <div className="header">
                Already have an account
                <div>
                    <button>Log in</button>
                </div>
            </div>
            <div className="title">
                <div>
                    TypeForm
                </div>
            </div>
            <div className="content">
                Get better data with conversational forms, surveys, quizzes & more.
            </div>
            <div className="content-form">
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
                        <input type="password"
                            value={password}
                            className="form-control"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className="icon">
                            <AiFillEye />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;