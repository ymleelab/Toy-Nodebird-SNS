import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';

function logInAPI(data) {
    return axios.post('/api/login', data)
}
function* logIn(action) {
    try {
        console.log('saga logIn');
        //const result = yield call(logInAPI, action.data) //call : 동기 함수 호출
        yield delay(1000);
        yield put({ //action dispatch와 비슷
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({ 
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}
function logOutAPI() {
    return axios.post('/api/logout')
}
function* logOut() {
    try {
        //const result = yield call(logOutAPI)
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
            //data: result.data
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
           //data: err.response.data,
        });
    }
}
function signUpAPI() {
    return axios.post('/api/signUp'); 
}

function* signUp() {
    try {
        // const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
          type: SIGN_UP_SUCCESS,
        });
      } catch (err) {
        yield put({
          type: SIGN_UP_FAILURE,
          error: err.response.data,
        });
    }
}
    


//yield throttle('ADD_POST_REQUEST', addPost, 2000); 
//throttle : 마지막 함수가 호출된 후 일정 시간동안 제한 (클릭 여러번, 스크롤)
//debouncing : 주로 ajax에서 연이어 호출되는 함수들 중 마지막 함수만 호출 (검색어 등에서 키보드 글자 제한)
//마우스 2번 눌렀을 때 takeLeading : 전자, takeLatest : 후자만 유효함.
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);   //takeEvery : 기본, 
}
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);    
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn), //fork : 비동기 함수 호출
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}