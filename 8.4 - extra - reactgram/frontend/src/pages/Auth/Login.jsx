import './Auth.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Message } from '../../components/Message.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../slices/authSlice.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p>Faça login pra ver o que há de novo.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          disabled={loading ? true : false}
          value={loading ? 'Aguarde...' : 'Entrar'}
        />
        {error && <Message message={error} type={'error'} />}
      </form>
      <p>
        Não tem uma conta? <Link to="regsiter">Click aqui</Link>.
      </p>
    </div>
  );
};

export default Login;
