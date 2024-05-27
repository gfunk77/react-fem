import axios from 'axios';

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error searching user:', error);
    throw error;
  }
};
