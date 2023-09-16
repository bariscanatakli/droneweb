import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
const RoutesComponent = () => (
  <div>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
  </div>
);

export default RoutesComponent;
