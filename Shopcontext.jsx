import { createContext} from "react";
import all_product from '../assets/Assets/all_product.js'

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const contextValue={all_product};
   return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
        
)
}
export default ShopContextProvider