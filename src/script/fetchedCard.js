const API_KEY = '27726605-068cf1407b48bdba6244e39cb';
axios.defaults.baseURL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true`;
import axios from 'axios';

export const fetchedCards = async (value, elPerPage, page) => {
  try {
    const response = await axios(
      `&q=${value}&per_page=${elPerPage}&page=${page}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
