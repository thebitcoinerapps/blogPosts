import jsonPlaceholder from '../apis/JSONplaceholder';

export const fetchPost = async () => {

    const res = await jsonPlaceholder.get('/post');


    return {
        type: 'FETCH_POST'
    };
};