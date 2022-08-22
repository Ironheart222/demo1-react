import React, { useContext, useReducer, useEffect } from 'react';
import reducer from "./reducer";
const initialState = {
    isLoading:true,
    page:0,
    noPages:0,
    results:[]
}
const AppContext = React.createContext();
const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    const fatchApiData = async (url) => {

        dispatch({ type:"SET_LOADING"});

        try {
            const res = await fetch(url);
            const dataGride = await res.json(res);
            console.log("dataGride ", dataGride);
            dispatch({
                type: "GET_DATA",
                payload:{
                    results:dataGride.results
                }
            })

        } catch (error) {
            console.log(error);
        }
    }

    // https://randomuser.me/api/?page=3&results=10&seed=abc
    useEffect(() => {
        fatchApiData(`https://randomuser.me/api/?page=3&results=10`)

    }, [state.page])


    return <AppContext.Provider value={{ ...state}}>{children}</AppContext.Provider>;
}

const useGlobleContext = () =>{
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobleContext };