import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

//declare new reduce
const rootReducer = combineReducers({
    counter: counterReducer,
    userDavid: userReducer
});

export default rootReducer;