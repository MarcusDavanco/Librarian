import React from 'react';
//firebaseAuthReducer
import { firebaseAuth } from '../Components/Reducers/authReducer';

export const Auth = React.createContext();
const initialState = {
    user: {}
}

const AuthProvider = (props) => {

    const [state, dispatch] = React.useReducer(firebaseAuth, initialState);
    const value = {state, dispatch};

    return <Auth.Provider value={value}>{props.children}</Auth.Provider>

}

export default AuthProvider;