import { configureStore } from '@reduxjs/toolkit';
import reducer from './cardSlice'
export default configureStore({
    reducer:{
        cards: reducer 
    }
})