
const noteInitialState = {
    wishlist: [],
    countWishlist: 0
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {

        case "ADD_INTO_WISHLIST":
            return { ...state, wishlist: [...state.wishlist, action.payload] , countWishlist: state.countWishlist+1}

        default:
            return state
    }
}
export default allReducer;