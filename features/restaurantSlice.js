import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  imgUrl: "",
  rating: "",
  title: "",
  genre: "",
  address: "",
  short_description: "",
  dishes: "",
  long: null,
  lat: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
