import { useEffect, useState } from 'react';
import { uploads } from '../../utils/config';
import { useSelector, useDispatch } from 'react-redux';
import {
  getUserProfile,
  resetMessage,
  updateUserProfile,
} from '../../slices/userSlice.js';
import { Message } from '../../components/Message.jsx';
import './EditProfile.css';

const EditProfile = () => {
  const dispatch = useDispatch();

  const { user, loading, error, message } = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [bio, setBio] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setName(user?.name || '');
      setEmail(user?.email || '');
      setBio(user?.bio || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather user data from states
    const userData = {
      name,
    };

    if (profileImage) {
      userData.profileImage = profileImage;
    }

    if (bio) {
      userData.bio = bio;
    }

    if (password) {
      userData.password = password;
    }

    // build form data
    const formData = new FormData();
    Object.keys(userData).forEach((key) => formData.append(key, userData[key]));
    await dispatch(updateUserProfile(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2500);
  };
  const handleFile = (e) => {
    const image = e.target.files[0];

    setPreviewImage(image);

    setProfileImage(image);
  };
  if (loading) return <p>Loading...</p>;
  return (
    <div id="edit-profile">
      <h2>Edite suas informações</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte mais sobre você
      </p>

      {(user.profileImage || previewImage) && (
        <img
          className="profile-image"
          src={
            previewImage
              ? URL.createObjectURL(previewImage)
              : `${uploads}/users/${user.profileImage}`
          }
          alt={user.name}
        />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" disabled placeholder="E-mail" value={email} />

        <label>
          <span>Imagem de perfil</span>
          <input type="file" onChange={handleFile} />
        </label>
        <label>
          <span>Bio:</span>
          <input
            type="text"
            placeholder="Descrição do perfil"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <label>
          <span>Deseja alterar sua senha?</span>
          <input
            type="password"
            placeholder="Atualize sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value={loading ? 'Aguarde...' : 'Atualizar perfil'}
        />
        {error && <Message message={message} type={'error'} />}
        {message && <Message message={message} type={'success'} />}
      </form>
    </div>
  );
};

export default EditProfile;
