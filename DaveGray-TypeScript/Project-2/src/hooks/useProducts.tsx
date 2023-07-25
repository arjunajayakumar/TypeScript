import { useContext } from "react";
import ProductsContext from "../Context/ProductsProvider";
import { UseProductContextType } from "../Context/ProductsProvider";

const useProducts = (): UseProductContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
