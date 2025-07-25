import { createSlice } from "@reduxjs/toolkit";

const sliceFilter = createSlice({
    name: "filters",

    initialState: {
        task: ""
    },
     
    reducers: {
        changeFilter: (state, action) => { 
            state.name = action.payload;
        },
    }
});
 
export const { changeFilter} = sliceFilter.actions;
const filterReducer = sliceFilter.reducer;
export default filterReducer;
