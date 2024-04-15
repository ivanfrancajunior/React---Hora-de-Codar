import { api_url, requestConfig } from '../utils/config';

const getUserProfile = async (data, token) => {
  const config = requestConfig('GET', data, token);

  try {
    const res = await fetch(api_url + '/users/profile', config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const userService = { getUserProfile };

export default userService;
