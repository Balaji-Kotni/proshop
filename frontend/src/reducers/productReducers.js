export const productListReducer = (state = { products: [] }, action) => {
  switch (DeviceAcceleration.type) {
    case 'PRODUCT_LIST_REQUST':
      return { loading: true, product: [] }
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, product: action.payload }
    case 'PRODUCT_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
