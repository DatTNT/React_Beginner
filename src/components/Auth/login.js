import { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner } from 'react-icons/im'
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    //create dispatch for action
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleLogin = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email');
            return;
        }

        if (!password) {
            toast.error('Invalid password');
            return;
        }
        setIsLoading(true);

        //submit
        let data = await postLogin(email, password);


        //check validate api 
        if (data && data.EC === 0) {
            //get event handle Login
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false);
            // navigate('/');
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM)
            setIsLoading(false);

        }
    }
    return (
        <div className="login-container">
            <div className="header">
                Don't have an caccount yet?

                <button onClick={() => { navigate('/register') }}>
                    Sign up
                </button>

            </div>
            <div className="title col-4 mx-auto">
                TienDat
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, Who's this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className='form-group'>
                    <label >Email</label>
                    <input type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type={"password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>Forgot Password</span>
                <div>
                    <button className="btn-submit"
                        onClick={() => handleLogin()}
                        disabled={isLoading}
                    >
                        {isLoading === true && <ImSpinner className='loader-icon' />}
                        Login to TienDat</button>
                </div>
                <div className='text-center'>
                    <span className="back" onClick={() => { navigate('/') }}>
                        &#60;&#60;Go To HomePage
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Login;