import axios from 'axios';

export const initialState = {
    isLoggingIn: false, //로그인 시도중일때
    isLoggedIn: false,
    isLoggingOut: false, //로그아웃 시도중일때
    me: null,
    signUpData: {},
    loginData: {}
}

/*export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        setTimeout(() => {
            dispatch(loginRequestAction());
        }, 2000);
        axios.get('api/login')
            .then((res) => {
                dispatch(loginSuccessAction(res));
            })
            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
    }
}*/
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
};
export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
};
export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    }
};
export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FAILURE',
        data,
    }
};
export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
};
export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
};
export const logoutSuccessAction = () => {
    return {
        type: 'LOG_OUT_SUCCESS',
    }
};
export const logoutFailureAction = () => {
    return {
        type: 'LOG_OUT_FAILURE',
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN_REQUEST':
            console.log('reducer logIn');
            return {
                ...state,
                isLoggingIn: true,       
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname: 'ymleelab' },
            };
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,        
            };
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            };
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            };
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
            };
        default:
            return state;
    }
};

export default reducer;