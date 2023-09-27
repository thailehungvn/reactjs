/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const endpoint = 'https://nodejs-4fqb.onrender.com/products/users/1';

export default {
  async getMyProfile() {
    const response = await axios.get(endpoint);

    return {
      ...response.data,
      avt: 'https://i.pravatar.cc/300',
    };
  },
};
