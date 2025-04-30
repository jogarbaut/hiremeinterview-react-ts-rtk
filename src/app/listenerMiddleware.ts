import { createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit';

// Create listener middleware instance typed
export const listenerMiddleware = createListenerMiddleware();

// Export typed version of startListening to use in listeners.ts
export type AppStartListening = TypedStartListening<any, any>;
export const startAppListening = listenerMiddleware.startListening as AppStartListening;
