import React from 'react';
import { uploads } from '../utils/config';
import { Link } from 'react-router-dom';
import './SinglePhoto.css';
const SinglePhoto = ({ photo }) => {
  const { image, title, useName, userId } = photo;
  return (
    <div className="photo-item">
      {image && <img src={`${uploads}/photos/${image}`} alt={title} />}
      <h2>{title}</h2>
      <p className="photo-author">
        Publicada por: <Link to={`/users/${userId}`}>{useName}</Link>
      </p>
    </div>
  );
};

export default SinglePhoto;
