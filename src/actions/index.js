import jsonPlaceholder from '../apis/JSONplaceholder';

export const fetchPost = () => {

    return async (dispatch) => {
        const res = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POST', payload: res});
    }
};