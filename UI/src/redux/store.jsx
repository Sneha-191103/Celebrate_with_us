import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartslice"; 

const persistConfig = {
  key: 'root',
  storage
};

// user: persistReducer(persistConfig, UserSlice.reducer),
// admin: persistReducer(persistConfig, AdminSlice.reducer),
const rootReducer = {
  cart: persistReducer(persistConfig, cartSlice),
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store, null, (error) => {
  console.log(error);
});

export default { store, persistor };