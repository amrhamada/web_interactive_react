import React, { useEffect } from 'react';
import authTeacher from "../../hooks/authTeacher";
import { useHistory } from "react-router-dom";

export default function Logout(props) {
  let history = useHistory();
  const { doRequest } = authTeacher({
    url: 'http://localhost:3001/logout/',
    method: 'post',
    body: {}, 
  })

  useEffect(() => {
    doRequest()
    .then(() => {
      sessionStorage.clear();
      props.setUser(false);
      history.push("/")
    })
    .catch(err => console.log(err))
  });
 return <div>Signing you out...</div>;
}
