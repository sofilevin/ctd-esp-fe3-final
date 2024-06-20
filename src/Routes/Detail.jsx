//import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [dentist, setDentist] = useState([]);
  const params = useParams(); // params contiene el id del elemento
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  useEffect(() => {
    axios(url).then((res) => {
      setDentist(res.data);
    });
  }, []);

  return (
    <div className="card">
      <h1>Dentista numero {dentist.id} </h1>
      <img src="/images/doctor.jpg" alt={dentist.name} />
      <h3>Nombre: {dentist.name}</h3>
      <h4>Username: {dentist.username}</h4>
      <h4>Email: {dentist.email}</h4>
      <h4>Número telefónico: {dentist.phone}</h4>
      <h4>Website: {dentist.website}</h4>
    </div>
  );
};

export default Detail;
