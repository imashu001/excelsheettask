// import {
//   postRow,
//   deleteRow
// } from '../actions'
// import {
//   postSucess,postFailed,deleteRowFailed,deleteRowSucess
// } from ''


// export function* postRowdata({ payload }) {
//   try {
//     console.log("Sucess");
//     yield put(postSucess)    
//   } catch (error) {
//     console.log("error")
//     yield put(postFailed)
//   }
// }

// export function* deleteRowdata({ payload }) {

//   try {
//     console.log("Sucess")
//     yield put(deleteRowSucess)    
//   } catch (error) {
//     console.log("error")
//     yield put(deleteRowFailed)
//     // yield put(orgLoginFailure(error.message.replace('GraphQL error: ', '')))
//   }
// }
import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRowData(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCESS", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* deleteRowData(action) {
  try {
     const user = yield call(Api.fetchUser, action.payload.userId);
     yield put({type: "USER_FETCH_SUCCESS", user: user});
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* postRowData(action) {
  try {
     const user = yield call(Api.fetchUser, action.payload.userId);
     yield put({type: "USER_FETCH_SUCCESS", user: user});
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* mySaga() {
  yield takeLatest("GET_ROW_INITIATED", fetchRowData);
  yield takeLatest("DELETE_ROW_INITIATED", deleteRowData);
  yield takeLatest("POST_ROW_INITIATED", postRowData);
}

export default mySaga;