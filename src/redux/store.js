import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import accountReducer from './accountSlice';

const persistConfig = {
    key: 'cart',
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const accountPersistedReducer = persistReducer(
    {
        key: 'account',
        storage,
    },
    accountReducer,
);

export const store = configureStore({
    reducer: { cart: persistedReducer, account: accountPersistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
