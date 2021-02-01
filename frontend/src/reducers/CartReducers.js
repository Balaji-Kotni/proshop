import { CART_ADD_ITEM } from '../Constants/CartConstants'

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find((x) => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    default:
      return state
  }
}
// export const productDetailsReducer = (
//   state = { product: { reviews: {} } },
//   action
// ) => {
//   switch (action.type) {
//     case PRODUCT_DETAILS_REQUEST:
//       return { loading: true, ...state }
//     case PRODUCT_DETAILS_SUCCESS:
//       return { loading: false, product: action.payload }
//     case PRODUCT_DETAILS_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
