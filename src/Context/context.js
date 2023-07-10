import React, { createContext, useState } from "react";
import { Data } from "../api config/Data";

export const myContext = createContext();
const ContextProvider = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState(Data);
  const [isVegFilter, setIsVegFilter] = useState(false);
  const [highratedFilter, setHighratedFilter] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [popupFilterCategory, setPopupFilterCategory] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productInfo, setProductInfo] = useState(false);

  console.log(selectedProduct)
  return (
    <div>
      <myContext.Provider
        value={{
          showFilter,
          setShowFilter,
          data,
          isVegFilter,
          setIsVegFilter,
          highratedFilter,
          setHighratedFilter,
          selectedValue,
          setSelectedValue,
          popupFilterCategory,
          setPopupFilterCategory,
          selectedProduct,
          setSelectedProduct,
          productInfo,
          setProductInfo
        }}
      >
        {children}
      </myContext.Provider>
    </div>
  );
};

export default ContextProvider;
