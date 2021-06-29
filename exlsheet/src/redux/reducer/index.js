import { actionChannel } from 'redux-saga/effects'
import data from '../../data'
import { post } from '../actionTypes'


const initialState = {
  data: []
}



export default function adminModule(state = initialState, { payload, type }) {
  switch (type) {
    case post.GET_POST_ROW_INITIATE:
      return {
        ...state
      }

    case post.GET_POST_ROW_SUCCESS:
      return {
        ...state, data: payload
      }

    case post.GET_POST_ROW_FAILURE:
      return {
        ...state
      }
    case post.POST_ROW_INITIATE:
      return {
        ...state
      }

    case post.POST_ROW_SUCCESS:
      return {
        ...state, data:[...state.data, payload]
      }

    case post.POST_ROW_FAILURE:
      return {
        ...state
      }

    case post.DELETE_ROW_INITIATE:
      return {
        ...state
      }

    case post.DELETE_ROW_SUCCESS: {
      return {
        ...state,  data: state.data.filter((itm)=> itm._id !== payload)
      }
    }
    case post.DELETE_ROW_FAILURE: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
