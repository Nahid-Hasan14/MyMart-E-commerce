import { createSlice } from "@reduxjs/toolkit"

const initialAddress = {
    address: []
}

export const addressSlice = createSlice({
    name: "deliveryAddress",
    initialState: initialAddress,
    reducers: {
        showAddress: ((state)=> state),
        addAddress: ((state, action)=> {
            state.address.push(action.payload)
        }),
        updateAddress: ((state, action)=> {
            const {id, fullName, email, phoneNumber, fullAddress, division, district, upozila, thana} = action.payload
            const isAddressExit = state.address.filter((adres)=> adres.id === id)
            if(isAddressExit){
                isAddressExit[0]. fullName = fullName
                isAddressExit[0]. fullAddress = fullAddress
                isAddressExit[0]. email = email
                isAddressExit[0]. phoneNumber = phoneNumber
                isAddressExit[0]. division = division
                isAddressExit[0]. district = district
                isAddressExit[0]. upozila = upozila
                isAddressExit[0]. thana = thana
            }
        })
    }
})

export const {showAddress, addAddress, updateAddress} = addressSlice.actions
export default addressSlice.reducer