import * as api from "../api";
import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionConstant";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePosts(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePosts = (id) => async (dispatch) => {
  try {
    await api.deletePosts(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePosts(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
