import axios from 'axios';

const KEY = 'AIzaSyCD227zgCPl7LKu7k3j3rM6rQGvrROZfgg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});