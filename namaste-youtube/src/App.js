import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
   {
     path: "/",
     element: <MainContainer />
   },
   {
     path: "watch",
     element: <WatchPage />
   }

  ]
}])

const App = () => {
  return (
    <Provider store={store}>
      < Header / >
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
