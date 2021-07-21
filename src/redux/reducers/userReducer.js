import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_ERROR,
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESSFUL,
  USER_REGISTRATION_ERROR,
  USER_LOGOUT,
  USER_UPDATE_LOADING,
  USER_UPDATE_SUCCESSFUL,
  USER_UPDATE_ERROR,
} from "../constants/userConstants";

import produce from "immer";

const initialState = {
  loading: false,
  user: {},
  error: false,
};

export const userLoginReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_LOADING: {
      state.loading = true;
      return;
    }

    case USER_LOGIN_SUCCESSFUL: {
      state.loading = false;
      state.user = action.payload;
      return;
    }

    case USER_LOGIN_ERROR: {
      state.loading = false;
      state.error = action.payload;
      return;
    }

    case USER_LOGOUT: {
      state.user = {};
      return;
    }

    default: {
      return state;
    }
  }
});

export const userRegistrationReducer = produce(
  (state = initialState, action) => {
    switch (action.type) {
      case USER_REGISTRATION_LOADING: {
        state.loading = true;
        return;
      }

      case USER_REGISTRATION_SUCCESSFUL: {
        state.loading = false;
        state.user = action.payload;
        return;
      }

      case USER_REGISTRATION_ERROR: {
        state.loading = false;
        state.error = action.payload;
        return;
      }

      default: {
        return state;
      }
    }
  }
);

export const userUpdateReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case USER_UPDATE_LOADING: {
      state.loading = true;
      return;
    }

    case USER_UPDATE_SUCCESSFUL: {
      state.loading = false;
      state.user = action.payload;
      return;
    }

    case USER_UPDATE_ERROR: {
      state.loading = false;
      state.error = action.payload;
      return;
    }

    default: {
      return state;
    }
  }
});
