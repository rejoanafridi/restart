import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<header aria-label="Site Header" className="bg-white">
				<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="md:flex md:items-center md:gap-12">
							<Link to="/" className="block text-teal-600">
								<span className="sr-only">Home</span>
								<h2 className="text-2xl">RICH</h2>
							</Link>
						</div>

						<div className="hidden md:block">
							<nav aria-label="Site Nav">
								<ul className="flex items-center gap-6 text-sm">
									<li>
										<Link
											to="/home"
											className="text-gray-500 transition hover:text-gray-500/75"
										>
											Home
										</Link>
									</li>
									<li>
										<Link
											to="/about"
											className="text-gray-500 transition hover:text-gray-500/75"
										>
											About
										</Link>
									</li>

									<li>
										<Link
											to="/history"
											className="text-gray-500 transition hover:text-gray-500/75"
										>
											History
										</Link>
									</li>
								</ul>
							</nav>
						</div>

						<div className="flex items-center gap-4">
							<div className="sm:flex sm:gap-4">
								<a
									className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
									href="/"
								>
									Login
								</a>

								<div className="hidden sm:flex">
									<a
										className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
										href="/"
									>
										Register
									</a>
								</div>
							</div>

							<div className="block md:hidden">
								<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
