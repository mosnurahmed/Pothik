import React from "react";
import Home from "./Home";
import Admin from "./components/admin/Admin";
import Blogpost from "./components/blogpost/Blogpost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Registration from "./components/signup&login/Registration";
import Login from "./components/signup&login/Login";
import PackageAdd from "./components/admin/PackageAdd";
import AddBlog from "./components/blogpost/AddBlog";
import useAuthCheck from "./hooks/useAuthCheck";
import BlogDetails from "./components/blogpost/BlogDetails";
import Payment from "./components/payment/Payment";
import Success from "../src/components/util/Success";
import PrivateRoute from "./components/util/PrivateRoute";
import AboutUs from "./components/about/AboutUs";
const App = () => {
  const isAuthChecked = useAuthCheck();

  // return !isAuthChecked ? (
  //   <div>Authentication Checking!!!!</div>
  // ) : (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route
  //         path="/admin"
  //         element={
  //           <PrivateRoute>
  //             <Admin />
  //           </PrivateRoute>
  //         }
  //       />
  //       <Route path="/" element={<Home />} />
  //       <Route path="/blogs" element={<Blogpost />} />
  //       <Route path="/registration" element={<Registration />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route
  //         path="/addPackage"
  //         element={
  //           <PrivateRoute>
  //             <PackageAdd />
  //           </PrivateRoute>
  //         }
  //       />
  //       <Route
  //         path="addBlog"
  //         element={
  //           <PrivateRoute>
  //             <AddBlog />
  //           </PrivateRoute>
  //         }
  //       />
  //       <Route path="/blogs/:blogId" element={<BlogDetails />} />
  //       <Route
  //         path="/payment/:packId"
  //         element={
  //           <PrivateRoute>
  //             <Payment />
  //           </PrivateRoute>
  //         }
  //       />
  //       <Route
  //         path="/success"
  //         element={
  //           <PrivateRoute>
  //             <Success />
  //           </PrivateRoute>
  //         }
  //       />
  //       <Route path="/aboutUs" element={<AboutUs/>}/>
  //     </Routes>
  //   </BrowserRouter>
  // );
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogpost />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {
            isAuthChecked && (
              <>
               <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
              <Route
            path="/addPackage"
            element={
              <PrivateRoute>
                <PackageAdd />
              </PrivateRoute>
            }
          />
          <Route
            path="addBlog"
            element={
              <PrivateRoute>
                <AddBlog />
              </PrivateRoute>
            }
          />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route
            path="/payment/:packId"
            element={
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            }
          />
          <Route
            path="/success"
            element={
              <PrivateRoute>
                <Success />
              </PrivateRoute>
            }
          />
              
              </>
            )
          }
 
           <Route path="/aboutUs" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
