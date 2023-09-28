import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';
import feed from '../../Assets/feed.svg';
import stats from '../../Assets/estatisticas.svg';
import addPhoto from '../../Assets/adicionar.svg';
import sair from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  // yeo

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={feed} />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={stats} />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={addPhoto} />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}>
        <img src={sair} />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
