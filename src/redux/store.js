import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/filter-reducer';
import contactsReducer from "./contacts/contacts-sclice"
import authReducer from "./auth/auth-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts:  contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})


export default store;