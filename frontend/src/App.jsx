import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>header</h1>
        <Routes>
          <Route path="/dashboard" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <h1>footer</h1>
      </div>
    </BrowserRouter>
  );
};

export default App;
