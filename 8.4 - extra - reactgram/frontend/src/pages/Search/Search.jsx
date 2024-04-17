import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useResetComponentMessage } from '../../hooks/useResetMessage';
import SinglePhoto from '../../components/SinglePhoto.jsx';
import LikeContainer from '../../components/LikeContainer.jsx';
import { useQuery } from '../../hooks/useQuery.js';
import './Search.css';
import { likePhoto, searchPhotos } from '../../slices/photoSlice.js';

const Search = () => {
  const query = useQuery();

  const search = query.get('q');

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(searchPhotos(search));
  }, [dispatch, search]);

  const handleLike = (photo = null) => {
    dispatch(likePhoto(photo._id));

    resetMessage();
  };
  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div id="search">
      {search === null && <h2>Digite sua busca</h2>}
      {search === null && photos.length === 0 && <p>No Match results.</p>}
      <>
        {search && <h2>Resultados encontrados para: {search}</h2>}
        {photos &&
          photos.map((photo) => (
            <div key={photo._id}>
              <SinglePhoto photo={photo} />
              <LikeContainer
                photo={photo}
                user={user}
                handleLike={handleLike}
              />
              <Link className="btn" to={`/photos/${photo._id}`}>
                Ver mais
              </Link>
            </div>
          ))}
      </>
    </div>
  );
};

export default Search;
