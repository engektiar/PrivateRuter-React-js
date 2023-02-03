import Home from "./component/page/Home";

import Contuct from "./component/page/Contuct";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import About from "./component/page/Login";
import PrivateRouter from "./component/PrivateRuting/PrivateRouter";

function App() {
  return (
    <div>
      <Header />
      <h2>Deshbord a pritvae router use kora Hoisa </h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<About />} />
        <Route path="/contact" element={<Contuct />} />

        <Route path="/*" element={<PrivateRouter />}>
          <Route path="deshbord" element={<Contuct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
