//import React from "react";

import { useState } from "react";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombreCompleto: "",
    email: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false);
    setShowSuccess(false);
    const regexEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (usuario.nombreCompleto.length > 4 && regexEmail.test(usuario.email)) {
      setShowSuccess(true);
      console.log(usuario);
    } else {
      setShowSuccess(false);
      setShowError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input
          type="text"
          value={usuario.nombreCompleto}
          onChange={(e) =>
            setUsuario({ ...usuario, nombreCompleto: e.target.value })
          }
        />
        <label>Email</label>
        <input
          type="text"
          value={usuario.email}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>
      {showSuccess && (
        <h2>
          Gracias {usuario.nombreCompleto}, te contactaremos cuando antes vía
          mail
        </h2>
      )}
      {showError && <h2>Por favor verifique su información nuevamente</h2>}
    </div>
  );
};

export default Form;
