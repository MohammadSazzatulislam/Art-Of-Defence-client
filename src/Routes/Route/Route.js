import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import AllServicess from "../../Pages/AllServicess/AllServicess";
import Details from "../../Pages/Details/Details";
import MyReview from "../../Pages/MyReview/MyReview";


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
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/servicess",
        loader: () => fetch("http://localhost:5000/service"),
        element: <AllServicess></AllServicess>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
        element: <Details></Details>,
      },
      {
        path: "/myReview",
        element: <MyReview></MyReview>,
      },
    ],
  },
]);


export default router
