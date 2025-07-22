import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./operations";
import { logout } from "../auth/operations";
import { selectTaskFilter } from "../filters/selectors";

export const selectTasks = state => state.tasks.items;
export const selectLoading = state => state.tasks.loading;
export const selectError = state => state.tasks.error;

export const selectFilteredContacts = createSelector(
    [selectTasks, selectTaskFilter],
    (task, filter) => {
        return task.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
)

const sliceContact = createSlice({
    name: "tasks",

    initialState: {
        items: [ 
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        ],
        loading: false,
        error: null
    },

    extraReducers: builder => {
    builder
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(task => task.id !== action.payload.id);
        })
        .addCase(logout.fulfilled, (state) => {
            state.items = [];
        });
  },    
});

const tasksReducer = sliceContact.reducer;
export default tasksReducer;