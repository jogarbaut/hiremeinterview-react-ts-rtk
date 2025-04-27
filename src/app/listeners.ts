import { startAppListening as rawStartAppListening } from './listenerMiddleware';
import { TypedStartListening, isAnyOf } from '@reduxjs/toolkit';
import {
    addUserQuestionSet,
    deleteUserQuestionSet,
    updateUserQuestionSet,
    toggleFavoriteUserQuestionSet,
} from '@/features/userQuestionSets/userQuestionSetsSlice';

import { toggleFavoriteDefaultQuestionSet } from '@/features/defaultQuestionSets/defaultQuestionSetsSlice';
import { RootState, AppDispatch } from './store';

const startAppListening: TypedStartListening<RootState, AppDispatch> = rawStartAppListening;

// Set up Redux listeners to persist relevant state slices to localStorage
export function setupListeners() {
    //  Save custom question sets
    startAppListening({
        matcher: isAnyOf(
            addUserQuestionSet,
            updateUserQuestionSet,
            deleteUserQuestionSet,
            toggleFavoriteUserQuestionSet,
        ),
        effect: (action, api) => {
            const state = api.getState().userQuestionSets;
            localStorage.setItem('userQuestionSets', JSON.stringify(state));
        },
    });

    // Save question set to favorites
    startAppListening({
        type: toggleFavoriteDefaultQuestionSet.type,
        effect: (action, api) => {
            const state = api.getState();
            const defaultSets = state.defaultQuestionSets.defaultQuestionSets;
            const favoriteIds = defaultSets.filter((set) => set.isFavorite).map((set) => set.id);

            localStorage.setItem('defaultQuestionSetFavorites', JSON.stringify(favoriteIds));
        },
    });
}
