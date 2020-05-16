import {ADD_USER, REMOVE_USER} from "./constants";

const initialState = {
    users: []
};

export default function rootReducer(state=initialState, action){
    let userList = [];
    switch(action.type){
        case ADD_USER:
            userList = [...state.users];
            userList.push(action.payload);
            return {
                ...state,
                users: userList
            };
        case REMOVE_USER:
            userList = [...state.users];
            const newList = userList.filter(user => (user !== action.payload));
            return {
                ...state,
                users: newList
            };
        default:
            return state;
    }
}