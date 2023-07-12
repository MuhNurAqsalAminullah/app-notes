import { configureStore } from "@reduxjs/toolkit";

// import MenuReducer from "./features/Menu/MenuSlice";
import fetchDataSliceReducer from "./features/fetchData/fetchDataSlice";

export default configureStore({
  reducer: {
    // menu: MenuReducer, // buttonReducer
    fetchData: fetchDataSliceReducer, // fetchDataSliceReducer
  },
});
