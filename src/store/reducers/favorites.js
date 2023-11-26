const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        changeFavorites: (state, { payload }) => {
            const hasItem = state.some((item => item.id === payload))

            if (!hasItem) {
                return [
                    ...state,
                    { id: payload, favorito: true }
                ]
            }

            return state.filter(item => item.id !== payload)
        },
    }
})

export const { changeFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer