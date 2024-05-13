import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    selectedTheme: null,
    selectedCake: null,
    selectedFoods: [],
  },
  reducers: {
    setTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
    setCake: (state, action) => {
      state.selectedCake = action.payload;
    },
    addFood: (state, action) => {
      const newFood = action.payload;
      const existingFoodIndex = state.selectedFoods.findIndex(food => food.mid === newFood.mid);
      if (existingFoodIndex !== -1) {
        state.selectedFoods[existingFoodIndex].quantity += 1;
      } else {
        state.selectedFoods.push({ ...newFood, quantity: 1 });
      }
    },
    removeFood: (state, action) => {
      const foodId = action.payload;
      state.selectedFoods = state.selectedFoods.filter(food => food.mid !== foodId);
    },
    removeAllFoods: (state) => {
      state.selectedFoods = [];
    },
    decreaseFoodQuantity: (state, action) => {
      const foodId = action.payload;
      const existingFood = state.selectedFoods.find(food => food.mid === foodId);
      if (existingFood && existingFood.quantity > 1) {
        existingFood.quantity -= 1;
      } else if (existingFood && existingFood.quantity === 1) {
        state.selectedFoods = state.selectedFoods.filter(food => food.mid !== foodId);
      }
    },
  },
});

export const { setTheme, setCake, addFood, removeFood, removeAllFoods, decreaseFoodQuantity } = cartSlice.actions;

export default cartSlice.reducer;
