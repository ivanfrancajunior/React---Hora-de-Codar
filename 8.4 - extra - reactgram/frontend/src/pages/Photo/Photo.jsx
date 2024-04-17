import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotoById, likePhoto, commentPhoto } from '../../slices/photoSlice';
import { Message } from '../../components/Message.jsx';
import SinglePhoto from '../../components/SinglePhoto.jsx';
import LikeContainer from '../../components/LikeContainer.jsx';
import CommentList from '../../components/CommentList.jsx';
import { useResetComponentMessage } from '../../hooks/useResetMessage.js';
import './Photo.css';
const Photo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo,
  );
  const { user } = useSelector((state) => state.auth);
  const [commentText, setCommentText] = useState('');
  const resetMessage = useResetComponentMessage(dispatch);
  useEffect(() => {
    dispatch(getPhotoById(id));
  }, [dispatch, id]);

  const handleLike = () => {
    dispatch(likePhoto(photo._id));
    resetMessage();
  };

  const handleComment = (e) => {
    e.preventDefault();
    const photoData = {
      comment: commentText,
      id: photo._id,
    };

    dispatch(commentPhoto(photoData));

    setCommentText('');

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

      <div className="comments">
        {!loading && photo && (
          <>
            <h3>Comentários ({photo.comments?.length}):</h3>
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Insira seu comentário..."
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText || ''}
              />
              <input type="submit" value="Enviar" />
            </form>
            <CommentList photo={photo} loading={loading} />
          </>
        )}
      </div>
    </div>
  );
};

export default Photo;
