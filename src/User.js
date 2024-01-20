import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  let {name} = useParams();

  return (
    <div>
      <h1>User {name}</h1>
    </div>
  );
};

export default User;
