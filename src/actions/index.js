export const submitPersonalInformation = payload => ({
    type: "SUBMIT_PERSONAL_INFORMATION",
    payload,
});

export const submitResults = payload => ({
    type: "SUBMIT_RESULTS",
    payload,
});

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
});

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload,
})