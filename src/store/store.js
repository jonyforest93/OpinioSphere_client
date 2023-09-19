import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {apiSlice} from "../api/api";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // Добавьте middleware для RTK-Query
    // Дополнительные параметры настройки могут быть добавлены здесь
});

setupListeners(store.dispatch); // Не забудьте вызвать setupListeners

export default store;