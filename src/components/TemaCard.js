import React from 'react';
import { Link } from 'react-router-dom';

const TemaCard = ({ nombre, path }) => {
  return(
    <div className='tema-crud'>
      <h3>{nombre}</h3>
      <Link to={path} className='link-button'>
        Ingresar al blog
      </Link>
    </div>
  )
}

export default TemaCard;