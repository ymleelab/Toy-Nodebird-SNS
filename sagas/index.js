import axios from 'axios';
import { all, call, fork, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
//delay, debounce, throttle, takeLatest, takeEvery

function logInAPI(data) {
    return axios.post('/api/login', data)
}
function* logIn(action) {
    try {
        //const result = yield call(logInAPI, action.data) //call : 동기 함수 호출
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            //data: result.data
        });
    } catch (err) {
        yield put({ //action dispatch와 비슷
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}
function logOutAPI() {
    return axios.post('/api/logout')
}
function* logOut() {
    try {
        const result = yield call(logOutAPI)
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}
function addPostAPI(data) {
    return axios.post('/api/post', data)
}
function* addPost(action) {
    try {
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}
//마우스 2번 눌렀을 때 takeLeading : 전자, takeLatest : 후자만 유효함.
function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);   //takeEvery : 기본, 
}
function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}
function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
    //yield throttle('ADD_POST_REQUEST', addPost, 2000); 
    //throttle : 마지막 함수가 호출된 후 일정 시간동안 제한 (클릭 여러번, 스크롤)
    //debouncing : 주로 ajax에서 연이어 호출되는 함수들 중 마지막 함수만 호출 (검색어 등에서 키보드 글자 제한)
}

export default function* rootSaga() {
    yield all([
        fork(watchLogIn),   //fork : 비동기 함수 호출
        fork(watchLogOut),
        fork(watchAddPost),
    ]);
}