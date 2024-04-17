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

const deletePhoto = async (id, token) => {
  const config = requestConfig('DELETE', null, token);

  try {
    const res = await fetch(`${api_url}/photos/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const updatePhoto = async (data, id, token) => {
  const config = requestConfig('PUT', data, token);

  try {
    const res = await fetch(`${api_url}/photos/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getPhotoById = async (id, token) => {
  const config = requestConfig('GET', null, token);

  try {
    const res = await fetch(`${api_url}/photos/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const likePhoto = async (id, token) => {
  const config = requestConfig('PUT', null, token);

  try {
    const res = await fetch(api_url + '/photos/like/' + id, config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const commentPhoto = async (data, id, token) => {
  const config = requestConfig('PUT', data, token);
  try {
    const res = await fetch(`${api_url}/photos/comment/${id}`, config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getAllPhotos = async (token) => {
  const config = requestConfig('GET', null, token);

  try {
    const res = fetch(`${api_url}/photos`, config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const searchPhotos = async (query, token) => {
  const config = requestConfig('GET', null, token);

  try {
    const res = await fetch(api_url + '/photos/search?q=' + query, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updatePhoto,
  getPhotoById,
  likePhoto,
  commentPhoto,
  getAllPhotos,
  searchPhotos
};

export default photoService;
