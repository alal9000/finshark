import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  // JSX
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
