const reducer = (state, action) => {

    switch (action.type) {
        case"SET_LOADING":
        return{
            ...state,
            isLoading:true
        }
        case "GET_DATA":
            return {
                ...state,
                isLoading: false,
                results: action.payload.results,
            }

        default:
            break;
    }



    return state;
};

export default reducer