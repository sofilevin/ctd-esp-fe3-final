//import React from 'react'

import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";

const Home = () => {
  const { state } = useDentistStates();


  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists.map((dentist) => {
          return (
            <Card
              item={dentist}
              key={dentist.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
