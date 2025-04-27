import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './listenerMiddleware';
import { setupListeners } from './listeners';
import userQuestionSetReducer from '@/features/userQuestionSets/userQuestionSetsSlice';
import defaultQuestionSetsReducer from '@/features/defaultQuestionSets/defaultQuestionSetsSlice';
import usersReducer from '@/features/users/usersSlice';

// Global Redux store configuration
// Combines feature slice reduces and adds listener middleware
export const store = configureStore({
    reducer: {
        userQuestionSets: userQuestionSetReducer,
        defaultQuestionSets: defaultQuestionSetsReducer,
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
