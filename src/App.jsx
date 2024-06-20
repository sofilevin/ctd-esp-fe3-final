import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useDentistStates } from "./Context/Context";
import Layout from "./Layout/Layout";

function App() {
  const { state } = useDentistStates();
  return (
    <div className={state.theme === "dark" ? "dark" : "light"}>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contacto} element={<Contact />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
