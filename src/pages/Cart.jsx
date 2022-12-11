import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<div className="container mx-auto grid grid-cols-4 gap-3 ">
			{cart?.map((product) => (
				<ProductCard key={product.id} product={product} cart={cart} />
			))}
		</div>
	);
};

export default Cart;
