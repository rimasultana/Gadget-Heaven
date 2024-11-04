import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Statistics from "../Pages/Statistics/Statistics";
import ViewDetails from "../Components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path:"/view/:id",
        element:<ViewDetails/>,
        loader:() => fetch('fackData.json'),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
