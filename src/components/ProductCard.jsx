import React from "react";
import { BiListPlus } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import addToCart from "../redux/actionCreators/productActions";
import { actionTypes } from "../redux/actionTypes/actionTypes";

const ProductCard = ({ product, cart }) => {
	const dispatch = useDispatch();
	return (
		<div
			className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 basis-1/3 md:basis-1/2"
			key={product.id}
		>
			{product?.quantity}
			<div className="h-52 w-52 mx-auto">
				<img src={product.image} alt={product.model} />
			</div>
			<h1 className="font-bold text-emerald-500 text-center">
				{product.model}
			</h1>
			<p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
			<div className=" flex-1">
				<ul className="space-y-2">
					{product.keyFeature.map((feature) => {
						return <li className="text-sm ">{feature}</li>;
					})}
				</ul>
			</div>
			<div className="flex gap-2 mt-5">
				{cart ? (
					<button
						title="Remove to cart"
						className="bg-teal-600  py-1 px-2 rounded-full flex w-96 justify-center text-white "
						onClick={() =>
							dispatch({ type: actionTypes.REMOVE_CART, payload: product })
						}
					>
						Remove <BiX className="text-white" />
					</button>
				) : (
					<button
						className="bg-teal-600 rounded-full py-1 px-2 flex-1 text-white text-bold"
						onClick={() => dispatch(addToCart(product))}
					>
						Add to cart
					</button>
				)}

				<button
					title="Add to wishlist"
					className="bg-teal-600  py-1 px-2 rounded-full"
				>
					<BiListPlus className="text-white" />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
