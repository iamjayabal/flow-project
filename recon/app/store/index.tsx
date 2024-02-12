import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import langReducer from './lang_slice';
import sideMenu from './menu_slice';
import themeChange from './theme_slide';
import tabSelection from './tab_selection_slice';
import UserReducer from './user_slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: langReducer,
    menu: sideMenu,
    theme: themeChange,
    tabs: tabSelection,
    user: UserReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
