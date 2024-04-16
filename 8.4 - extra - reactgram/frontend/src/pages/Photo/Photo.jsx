import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { uploads } from '../../utils/config';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotoById, likePhoto } from '../../slices/photoSlice';
import { Message } from '../../components/Message.jsx';
import SinglePhoto from '../../components/SinglePhoto.jsx';
import LikeContainer from '../../components/LikeContainer.jsx';
import { useResetComponentMessage } from '../../hooks/useResetMessage.js';
import './Photo.css';
const Photo = () => {
  const resetMessage = useResetComponentMessage(dispatch);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo,
  );

  useEffect(() => {
    dispatch(getPhotoById(id));
  }, [dispatch, id]);

  const handleLike = () => {
    dispatch(likePhoto(photo._id));
    resetMessage();
  };

  if (loading) return <p>carregando...</p>;
  return (
    <div id="photo">
      <SinglePhoto photo={photo} />
      <LikeContainer handleLike={handleLike} photo={photo} user={user} />
      <div className="message-container">
        {error && <Message message={error} type={'error'} />}
        {message && <Message message={message} type={'success'} />}
      </div>
    </div>
  );
};

export default Photo;
