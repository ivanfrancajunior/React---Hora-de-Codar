import React, { useState, useEffect, useRef } from 'react';
import { uploads } from '../../utils/config';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';
import { getUserDetails } from '../../slices/userSlice';
import { publishPhoto, resetMessage } from '../../slices/photoSlice';
import { Message } from '../../components/Message.jsx';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const {
    loading: loading_photo,
    message: message_photo,
    error: error_photo,
  } = useSelector((state) => state.photo);
  const { user: auth_user } = useSelector((state) => state.auth);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const newPhotoForm = useRef();
  //   const editFotoForm = useRef();
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const photoData = {
      title,
      image,
    };

    const formData = new FormData();
    Object.keys(photoData).forEach((key) =>
      formData.append(key, photoData[key]),
    );

    await dispatch(publishPhoto(formData));
    setTitle('');

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2500);
  };

  const handleFile = async (e) => {
    const current_image = e.target.files[0];
    setImage(current_image);
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div id="profile">
      {!loading && (
        <div className="profile-header">
          {user.profileImage && (
            <img
              src={`${uploads}/users/${user.profileImage}`}
              alt={user.name}
              className="profile-image"
            />
          )}
          <div className="profile-description">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </div>
        </div>
      )}
      {id === auth_user._id && (
        <>
          <div className="new_photo" ref={newPhotoForm}>
            <h3>Compartilhe algum momento seu!</h3>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Título da foto</span>
                <input
                  type="text"
                  placeholder="Insira um título"
                  value={title || ''}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                <span>Imagem</span>
                <input type="file" onChange={handleFile} />
              </label>
              <input
                type="submit"
                value={loading_photo ? 'Agarde...' : 'Postar'}
                disabled={loading_photo}
              />
              {error_photo && (
                <Message
                  message={message_photo}
                  type={error_photo ? 'error' : 'success'}
                />
              )}
              {message_photo && (
                <Message
                  message={message_photo}
                  type={error_photo ? 'error' : 'success'}
                />
              )}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
