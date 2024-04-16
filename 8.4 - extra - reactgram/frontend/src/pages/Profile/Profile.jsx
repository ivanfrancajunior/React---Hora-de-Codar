import React, { useState, useEffect, useRef } from 'react';
import { uploads } from '../../utils/config';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';
import { getUserDetails } from '../../slices/userSlice';
import {
  publishPhoto,
  resetMessage,
  getUserPhotos,
  deleteUserPhoto,
  updateUserPhoto,
} from '../../slices/photoSlice';
import { Message } from '../../components/Message.jsx';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const {
    photos,
    loading: loading_photo,
    message: message_photo,
    error: error_photo,
  } = useSelector((state) => state.photo);

  const { user: auth_user } = useSelector((state) => state.auth);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [editId, setEditId] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editTitle, setEditTitle] = useState('');

  const newPhotoForm = useRef();
  const editPhotoForm = useRef();

  useEffect(() => {
    dispatch(getUserDetails(id));
    dispatch(getUserPhotos(id));
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
  const handleDelete = async (id) => {
    console.log(id);
    dispatch(deleteUserPhoto(id));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2500);
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    const photoData = {
      title: editTitle,
      id: editId,
    };

    dispatch(updateUserPhoto(photoData));

    dispatch(resetMessage());
  };
  function hideOrShowForms() {
    newPhotoForm.current.classList.toggle('hide');
    editPhotoForm.current.classList.toggle('hide');
  }
  const handleEdit = (photo) => {
    if (editPhotoForm.current.classList.contains('hide')) {
      hideOrShowForms();
    }
    setEditId(photo._id);
    setEditTitle(photo.title);
    setEditImage(photo.image);
  };
  const handleCancelEdit = () => {
    hideOrShowForms();
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
            </form>
            {error_photo && (
              <Message
                message={error_photo}
                type={error_photo ? 'error' : 'success'}
              />
            )}
            {message_photo && (
              <Message
                message={message_photo}
                type={error_photo ? 'error' : 'success'}
              />
            )}
          </div>
          <div className="edit-photo hide" ref={editPhotoForm}>
            <p>Editando imagem</p>
            {editImage && (
              <>
                <img src={`${uploads}/photos/${editImage}`} alt={editTitle} />
              </>
            )}
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                onChange={(e) => setEditTitle(e.target.value)}
                value={editTitle || ''}
              />
              <input type="submit" value="Atualizar" />
              <button className="cancel-btn" onClick={handleCancelEdit}>
                Cancelar edição
              </button>
              {error_photo && (
                <Message
                  message={error_photo}
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
      <div className="user-photos">
        <h2>Fotos publicads:</h2>
        <div className="photos-container">
          {photos &&
            photos.map((photo) => (
              <div className="photo" key={photo._id}>
                <h3>{photo.title}</h3>
                {photo.image && (
                  <img
                    src={`${uploads}/photos/${photo.image}`}
                    alt={photo.title}
                  />
                )}
                {id === auth_user._id ? (
                  <div className="actions">
                    <Link to={`/photos/${photo._id}`}>
                      <BsFillEyeFill />
                    </Link>
                    <BsPencilFill onClick={() => handleEdit(photo)} />
                    <BsXLg onClick={() => handleDelete(photo._id)} />
                  </div>
                ) : (
                  <>
                    <link to={`${uploads}/photos/${photo.image}`}>Ver</link>
                  </>
                )}
              </div>
            ))}
          {photos && photos.length === 0 && (
            <p>Nenhuma publicação encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
//TODO: put the edit menu and the action on a hidden div with a hover effect in v2