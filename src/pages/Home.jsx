import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";
const Home = () => {
	const {
		state: { products, loading, error },
	} = useProducts();
     
	let content;

	if (loading) {
		content = <p>Loading</p>;
	}

	if (error) {
		content = <p>Something went wrong</p>;
	}

	if (!loading && !error && products.length === 0) {
		content = <p>Nothing to show, product list is empty</p>;
	}

	if (loading && !error && products.length) {
		content = products.map((product) => (
			<ProductCard key={product._id} product={product} />
		));
	}

	return (
		<div className="container mx-auto grid grid-cols-4 gap-3 ">{content}</div>
	);
};

export default Home;
