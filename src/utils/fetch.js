import axios from 'axios'

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '6c424b5532msh5ac0f5e5c59246ep18bfedjsn4517952d8552',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
  
export const fetch = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};