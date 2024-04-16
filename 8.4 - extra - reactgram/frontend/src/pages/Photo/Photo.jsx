import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { uploads } from '../../utils/config';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotoById, likePhoto } from '../../slices/photoSlice';
import { Message } from '../../components/Message';
import SinglePhoto from '../../components/SinglePhoto';
import LikeContainer from '../../components/LikeContainer';
import './Photo.css';
const Photo = () => {
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
  };

  if (loading) return <p>carregando...</p>;
  return (
    <div id="photo">
      <SinglePhoto photo={photo} />
      <LikeContainer handleLike={handleLike} photo={photo} user={user} />
    </div>
  );
};

export default Photo;
