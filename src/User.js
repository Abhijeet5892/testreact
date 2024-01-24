import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const User = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  //console.log(navigate);

  return (
    <div>
      <h1>User {name} page</h1>
      <h1>current url is {location.pathname}</h1>
      {location.pathname === `/user/test` ? (
        <button onClick={() => navigate("/about")}>Click me</button>
      ) : null}
    </div>
  );
};

export default User;
