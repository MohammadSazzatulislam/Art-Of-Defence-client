import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import AllServicess from "../../Pages/AllServicess/AllServicess";
import Details from "../../Pages/Details/Details";
import MyReview from "../../Pages/MyReview/MyReview";
import AddServices from "../../Pages/AddService/AddServices";
import Blog from "../../Pages/Blog/Blog";
import UpDateReviews from "../../Pages/UpDateReview/UpDateReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/servicess",
        loader: () =>
          fetch("https://art-of-defensee-server.vercel.app/service"),
        element: (
          <PrivateRoute>
            <AllServicess></AllServicess>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://art-of-defensee-server.vercel.app/details/${params.id}`
          ),
        element: <Details></Details>,
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://art-of-defensee-server.vercel.app/reviews/${params.id}`
          ),
        element: <UpDateReviews></UpDateReviews>,
      },
    ],
  },
]);

export default router;
