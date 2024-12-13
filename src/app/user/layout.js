import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      <ToastContainer limit={2}/>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
