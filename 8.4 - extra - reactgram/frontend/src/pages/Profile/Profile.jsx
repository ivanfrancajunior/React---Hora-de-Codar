import React, { useState, useEffect, useRef } from 'react';
import { uploads } from '../../utils/config';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';
import { getUserDetails } from '../../slices/userSlice';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const { user: auth_user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);
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
    </div>
  );
};

export default Profile;
