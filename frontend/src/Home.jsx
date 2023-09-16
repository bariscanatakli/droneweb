import { Outlet } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>DASHBOARD</h1>
    <Outlet />
  </div>
);

export default Home;