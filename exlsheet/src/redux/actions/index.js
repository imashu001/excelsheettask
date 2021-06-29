import { post } from '../actionTypes'

export const getPostRowInitiate = () => ({
  type: post.GET_POST_ROW_INITIATE,
})

export const getPostSuccess = (data) => ({
  type: post.GET_POST_ROW_SUCCESS,
  payload: data
})

export const getPostFailure = (data) => ({
  type: post.GET_POST_ROW_FAILURE,
  payload: data
})
export const postRowInitiate = (data) => ({
  type: post.POST_ROW_INITIATE,
  payload: data
})

export const postRowSuccess = (data) => ({
  type: post.POST_ROW_SUCCESS,
  payload: data
})

export const postRowFailure = (data) => ({
  type: post.POST_ROW_FAILURE,
  payload: data
})

export const deleteRowInitiate = (data) => ({
  type: post.DELETE_ROW_INITIATE,
  payload: data
})

export const deleteRowSuccess = (data) => ({
  type: post.DELETE_ROW_SUCCESS,
  payload: data
})

export const deleteRowFailed = (data) => ({
  type: post.DELETE_ROW_FAILURE,
  payload: data
})
