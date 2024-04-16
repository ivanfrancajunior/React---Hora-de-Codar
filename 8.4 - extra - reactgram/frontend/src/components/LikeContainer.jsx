import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import './LikeContainer.css';

const LikeContainer = ({ photo, user, handleLike }) => {
  const likesCount = photo?.likes?.length;
  return (
    <div className="like">
      {photo.likes && user && (
        <>
          {photo.likes?.includes(user._id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart color="red" onClick={() => handleLike(photo)} />
          )}
          <p>
            {photo?.likes?.length && likesCount}{' '}
            {photo?.likes?.length && likesCount < 1 ? 'likes' : 'like'}
          </p>
        </>
      )}
    </div>
  );
};

export default LikeContainer;
