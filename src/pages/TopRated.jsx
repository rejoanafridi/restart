import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const TopRated = () => {
	const products = useSelector((state) => state.product);

	let content;

	return (
		<div className="container mx-auto grid grid-cols-4 gap-3 ">
			{products
				?.filter((product) => product.rating >= 4)
				?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
		</div>
	);
};

export default TopRated;
