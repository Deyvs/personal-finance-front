import axios from 'axios';

export const getFinances = async () => {
    const { data } = await axios.get('http://localhost:8001/finances');
    return data;
}