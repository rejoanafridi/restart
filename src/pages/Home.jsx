import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

import { useSelector } from "react-redux";

const Home = () => {
	const [products, setProducts] = useState([]);
	// import redux global  state using useSelector hooks
	const state = useSelector((state) => state);
	console.log(state);

	useEffect(() => {
		fetch("/api/products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className="container mx-auto grid grid-cols-4 gap-3 ">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Home;
