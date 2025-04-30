import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './listenerMiddleware';
import { setupListeners } from './listeners';
import questionSetsReducer from '@/features/questionSets/questionSetsSlice';
import usersReducer from '@/features/users/usersSlice';

// Global Redux store configuration
// Combines feature slice reduces and adds listener middleware
export const store = configureStore({
    reducer: {
        questionSets: questionSetsReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Setup side effect listeners once store is configured
setupListeners();

// Type exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
