export let data = {
    authUser: {}
};

export function reducer(state, action) {
    switch (action.type) {
        case "LOGIN_USER": {
            console.log(state.authUser);
            return {
                ...state,
                authUser: action.payload,
            };
        }
        case "SIGNOUT_USER": {
            console.log(state.authUser);
            return {
                ...state,
                authUser: {},
            };
        }

        default:
            return state;
    }
}