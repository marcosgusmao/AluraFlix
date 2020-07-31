import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './styles.css';
import { Button } from '../../components/ButtonLink/style';


function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;