import jsonPlaceholder from '../apis/JSONplaceholder';

export const fetchPost = () => {

    return async (dispatch) => {
        const res = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POST', payload: res.data});
    }
};

export const fetchUser = (id) => {

    return async (dispatch) => {
        const res = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({type: 'FETCH_USER', payload: res.data});
    }
};