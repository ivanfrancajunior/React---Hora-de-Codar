import React from 'react';
import { Link } from 'react-router-dom';
import { uploads } from '../utils/config';
import '../pages/Photo/Photo.css';

const CommentList = ({ loading, photo }) => {
  return (
    <div>
      {!loading && photo?.comments?.length === 0 && (
        <p>Não há comentários...</p>
      )}

      {!loading &&
        photo.comments &&
        photo.comments.map((comment) => (
          <div className="comment" key={comment.commentId}>
            <div className="author">
              {comment.userImage && (
                <>
                  <img
                    src={`${uploads}/users/${comment.userImage}`}
                    alt={comment.userName}
                  />
                </>
              )}
              <Link to={`/users/${comment.userId}`}>
                <p>{comment.userName}</p>
              </Link>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
