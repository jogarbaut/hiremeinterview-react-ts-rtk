import { startAppListening as rawStartAppListening } from './listenerMiddleware';
import { TypedStartListening, isAnyOf } from '@reduxjs/toolkit';
import {
    addQuestionSet,
    updateQuestionSet,
    deleteQuestionSet,
    toggleFavoriteQuestionSet,
    addQuestionToSet,
    deleteQuestionFromSet,
    copyQuestionToUserSet,
} from '@/features/questionSets/questionSetsSlice';
import { RootState, AppDispatch } from './store';

const startAppListening: TypedStartListening<RootState, AppDispatch> = rawStartAppListening;

// Set up Redux listeners to persist relevant state slices to localStorage
export function setupListeners() {
    //  Save custom question sets
    startAppListening({
        matcher: isAnyOf(
            addQuestionSet,
            updateQuestionSet,
            deleteQuestionSet,
            toggleFavoriteQuestionSet,
            addQuestionToSet,
            deleteQuestionFromSet,
            copyQuestionToUserSet,
        ),
        effect: (action, api) => {
            const allSets = api.getState().questionSets.questionSets;

            // Persist user-defined sets
            const userSets = allSets.filter((set) => set.source === 'user');
            localStorage.setItem('userQuestionSets', JSON.stringify(userSets));
        },
    });
}
