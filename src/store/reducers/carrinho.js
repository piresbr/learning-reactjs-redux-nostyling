const { createSlice } = require("@reduxjs/toolkit")

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        changeCart: (state, { payload }) => {
            //payload é o id do item que vou receber
            const hasItem = state.some((item => item.id === payload))

            if (!hasItem) {
                //resolução error immer
                return [
                    ...state,
                    { id: payload, quantity: 1 }
                ]

            }

            return state.filter(item => item.id !== payload)
        },
        changeQuantity: (state, { payload }) => {
            state = state.map(item => {
                if (item.id === payload.id) {
                    item.quantity += payload.quantity
                }
                return item
            })
        }
    }
})


export const { changeCart, changeQuantity } = cartSlice.actions

export default cartSlice.reducer