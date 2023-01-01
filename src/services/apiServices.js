
import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}
const putUpdateUser = (id, username, role, image) => {
    //put data update
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}
//delete data
const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}

//loading data from limit
const fetUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

//get all user
const getAllUser = () => {
    return axios.get('api/v1/participant/all');
}

//post login
//when click login, input 1 more para 
const postLogin = (userEmail, userPassword) => {
    return axios.post(`api/v1/login`, {
        email: userEmail,
        password: userPassword,
        delay: 5000
    });
}
//post register
const postRegister = (userEmail, userName, userPassword) => {
    return axios.post(`api/v1/register`,
        { email: userEmail, username: userName, password: userPassword }
    );
}



//export function
export {
    postCreateNewUser,
    getAllUser,
    putUpdateUser,
    deleteUser,
    fetUserWithPaginate,
    postLogin,
    postRegister
}