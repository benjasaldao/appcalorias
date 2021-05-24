import { bindActionCreators } from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUBMIT_PERSONAL_INFORMATION':
            return {
                ...state,
                personalInformation: action.payload,
            }
        case 'GET_RESULTS':
            return {
                ...state,
                results: action.payload,
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;