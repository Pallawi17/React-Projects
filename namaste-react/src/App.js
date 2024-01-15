import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Profile from './components/Profile';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom';
import Shimmer from "./components/Shimmer";
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

//  Chunking
//  Code spliting
//  Dynamic buindling 
//  Lazy Loading 
//  On demand loading 
//  Dynamic import
//  Upon on demand loading React will suspend the loading becauze code is not there
//  never lazy loading do in another component
const Instamart = lazy(() => import('./components/Instamart'));


const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Pallawi",
    email: "pallawi@mapmyindia.com"
  });
  
  return(
    <React.Fragment>
      <Provider store={store}>
      <UserContext.Provider value={{user: user, setUser: setUser}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </React.Fragment>
  )
}

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: < AppLayout />,
  errorElement: <Error />,
  children: [
  {
    path: "/",
    element: < Body />
  },
  {
    path: "/about",
    element: < About />,
    children: [
      {
        path: "profile", //parent path /about/profile
        element: <Profile />
      }
    ]
  },
  {
    path: "/contact",
    element: < Contact / >
  },
  {
    path: "/cart",
    element: < Cart / >
  },
  {
    path: "/restaurant/:id",
    element: < RestaurantMenu / >
  },
  {
    path: "/instamart",
    element: < Suspense fallback = {
      < Shimmer / >
    } > < Instamart / > </Suspense> 
  },
  ]
}

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter}/> )
