
import { actionTypes } from "../state/actionTypes";

const initialState = {
	test: "afridi",
	cart: [],

};

const productReducer = (state = initialState, action) => {
	// set products using hooks

	
	const selectedProduct = state.cart.find(
		(product) => product.id == action.payload.id
	);
	console.log(state);
	switch (action.type) {
		

		case actionTypes.ADD_TO_CART:
			if (selectedProduct) {
				const newCart = state.cart.filter(
					(product) => product.id !== selectedProduct.id
				);
				selectedProduct.quantity = selectedProduct.quantity + 1;
				return {
					...state,
					cart: [...newCart, selectedProduct],
				};
			}
			return {
				...state,
				cart: [...state.cart, { ...action.payload, quantity: 1 }],
			};

		case actionTypes.REMOVE_CART:
			if (selectedProduct.quantity > 1) {
				const newCart = state.cart.filter(
					(product) => product.id !== selectedProduct.id
				);
				selectedProduct.quantity = selectedProduct.quantity - 1;

				return {
					...state,
					cart: [...newCart, selectedProduct],
				};
			}
			return {
				...state,
				cart: state.cart.filter((product) => product.id !== action.payload.id),
			};
		default:
			return state;
	}
};

export default productReducer;
