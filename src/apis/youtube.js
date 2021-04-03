import axios from 'axios';

// const KEY = 'AIzaSyBMdITPEd5iPa-o9Xfr4mVk-IMIsDtCoZI';
//Use this key in your application by passing it with the key=API_KEY parameter.

export default axios.create( {
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
