const { createSlice } = require("@reduxjs/toolkit")

const initialState = ''

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, { payload }) => payload,
        clearSearch: () => initialState
    }
})


export const { changeSearch, clearSearch } = searchSlice.actions

export default searchSlice.reducer