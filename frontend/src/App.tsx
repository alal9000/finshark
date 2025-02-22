import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";
function App() {
  // JSX
  return (
    <>
    <UserProvider>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </UserProvider>
    </>
  );
}

export default App;
