import axios from 'axios';

export const initialState = {
//    isLoggingIn: false, //로그인 시도중일때
//   isLoggedIn: false,
//    isLoggingOut: false, //로그아웃 시도중일때
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
    me: null,
    signUpData: {},
    loginData: {}
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

const dummyUser = (data) => ({
    ...data,
    nickname: '제로초',
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [],
    Followers: [],
  });


/*export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
};*/
export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
};
export const loginSuccessAction = (data) => {
    return {
        type: LOG_IN_SUCCESS,
        data,
    }
};
export const loginFailureAction = (data) => {
    return {
        type: LOG_IN_FAILURE,
        data,
    }
};
/*
export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
};*/
export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    }
};
export const logoutSuccessAction = () => {
    return {
        type: LOG_OUT_SUCCESS,
    }
};
export const logoutFailureAction = () => {
    return {
        type: LOG_OUT_FAILURE,
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN_REQUEST:
            console.log('reducer logIn');
            return {
                ...state,
                logInLoading: true,
                logInError: null,
                logInDone: false,       
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                logInLoading: false,
                logInDone: true,
                me: dummyUser(action.data),
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                logInLoading: false,
                logInError: action.error,        
            };
        case LOG_OUT_REQUEST:
            return {
                ...state,
                logOutLoading: true,
                logOutDone: false,
                logOutError: null,
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                logOutLoading: false,
                logOutDone: false,
                me: null,
            };
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutLoading: false,
                logOutError: action.error,
            };
        case SIGN_UP_REQUEST:
            return {
                ...state,
                signUPLoading: true,
                signUPDone: false,
                signUPError: null,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUPLoading: false,
                signUPDone: false,
                me: null,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signUPLoading: false,
                signUPError: action.error,
            };
        default:
            return state;
    }
};

export default reducer;