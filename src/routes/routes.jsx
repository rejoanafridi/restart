import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import History from "../pages/History";
import Home from "../pages/Home";
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
				path: "/history",
				element: <History />,
			},
		],
	},
]);

export default routes;
