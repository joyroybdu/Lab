// import { createContext } from "react";
// import { food_list } from "../assets/assets";
// export const StoreContext =createContext(null)
// const StoreContextProvider=(props)=>{
//     const contextValue={
//         food_list
//         // add your state variables and actions here
//         // your state variables and actions
//     }
//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }
// export default StoreContextProvider;    
import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const contextValue = { food_list };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
