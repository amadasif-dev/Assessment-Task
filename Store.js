import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import RootReducer from "./src/redux/RootReducer"

export default Store = configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })

})

