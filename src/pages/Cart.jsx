import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
	const {
		state: { cart, loading, error },
	} = useProducts();

	let content;

	if (loading) {
		content = <p>Loading</p>;
	}

	if (error) {
		content = <p>Something went wrong</p>;
	}

	if (!loading && !error && cart.length === 0) {
		content = <p>Nothing to show, product list is empty</p>;
	}

	if (loading && !error && cart.length) {
		content = cart?.map((product) => (
			<ProductCard key={product._id} product={product} cart={cart} />
		));
	}

	return (
		<div className="container mx-auto grid grid-cols-4 gap-3 ">{content}</div>
	);
};

export default Cart;
