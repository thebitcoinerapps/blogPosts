import jsonPlaceholder from '../apis/JSONplaceholder';

export const fetchPost = () => {

    return async function(dispatch, getState) {
        const res = await jsonPlaceholder.get('/post');

        dispatch({type: 'FETCH_POST', payload: res});
    }
};