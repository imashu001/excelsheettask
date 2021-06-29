
import { call, put, takeLatest } from 'redux-saga/effects'
import { deleteRowSuccess, getPostSuccess, postRowSuccess } from '../actions'
// import Api from '...'
import {
   GET_POST_ROW_INITIATE,
   POST_ROW_INITIATE,
   DELETE_ROW_INITIATE
} from '../actionTypes'

function* fetchRowData(action) {
     console.log("gcbj")
  try {
   const result = yield call(fetch, "http://localhost:8000/getPosts")
   const json = yield result.json()
   console.log(json)
   yield put(getPostSuccess(json))
  } catch (e) {
     yield put({type: "GET_POST_ROW_FAILURE", message: e.message});
  }
}

function* deleteRowData(action) {
 try {
   const result = yield call(fetch, "http://localhost:8000/destroy/"+action.payload, { method: 'DELETE' })
   const json = yield result.json()
   console.log(json)
    yield put(deleteRowSuccess(action.payload));
 } catch (e) {
    yield put({type: "DELETE_ROW_FAILURE", message: e.message});
 }
}

function* postRowData({payload}) {
 try {
   var requestOptions = {
      method: 'POST',
      body: JSON.stringify(payload),
      redirect: 'follow',
      headers: {
         'Content-Type': 'application/json'
      }
    };
    
    const data = yield call(fetch, "http://localhost:8000/post", requestOptions)
    const result =yield data.json()
    yield put(postRowSuccess(result));
 } catch (e) {
    yield put({type: "POST_ROW_FAILED", message: e.message});
 }
}

export default function* mySaga() {
 yield takeLatest("GET_POST_ROW_INITIATE", fetchRowData);
 yield takeLatest("POST_ROW_INITIATE", postRowData);
 yield takeLatest("DELETE_ROW_INITIATE", deleteRowData);
}

// export default mySaga;