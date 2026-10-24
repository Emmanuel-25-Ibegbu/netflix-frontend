import axios from 'axios';

export default axios.create({
       baseURL:'http://3.88.135.165:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
