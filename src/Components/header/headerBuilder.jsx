import React from 'react'
import { Link } from 'react-router-dom';

function HeaderBuilder({linkTo,name}) {
  return (
      <Link to={linkTo}>
        <button>{name}</button>
      </Link>
  );
}

export default HeaderBuilder