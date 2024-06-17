// https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge
import axios from 'axios';

export const getData = async () => {
    const response = await axios.get('https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge');
    return response.data;
}