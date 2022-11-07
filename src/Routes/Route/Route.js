import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Main from "../../Layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage></ErrorPage>,
        element: <Main></Main>,
    }
]);


export default router
