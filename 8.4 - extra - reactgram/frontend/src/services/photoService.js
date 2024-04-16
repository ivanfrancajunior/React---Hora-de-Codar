import { api_url, requestConfig } from '../utils/config';


const publishPhoto = async (data, token) => {
  const config = requestConfig('POST', data, token, true);

  try {
    const res = await fetch(api_url + '/photos', config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getUserPhotos = async (id, token) => {
  const config = requestConfig('GET', null, token);

  try {
    const res = await fetch(`${api_url}/photos/user/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const photoService = { publishPhoto, getUserPhotos };

export default photoService;
