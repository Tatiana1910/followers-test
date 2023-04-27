import axios from 'axios';

const BASE_URL = 'https://642da453bf8cbecdb40b84e6.mockapi.io';

export const getAllUsers = async page => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      params: {
        page,
        limit: 3,
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const updateFollowers = async userData => {
  try {
    const response = await axios.put(
      `${BASE_URL}/users/${userData.id}`,
      userData
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
