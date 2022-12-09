import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import History from "../pages/TopRated";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/top-rated",
				element: <History />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);

export default routes;
