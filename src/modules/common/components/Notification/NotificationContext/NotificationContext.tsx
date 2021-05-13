import React, { createContext, useContext, useReducer } from 'react';
export enum ACTIONS {
  add,
  update,
  remove,
  removeAll,
}

export interface IState {
  list: any[];
}

export interface IAction {
  type: ACTIONS;
  payload?: Partial<IState>;
}

export type TDispatch = React.Dispatch<IAction>;

const initialState: IState = {
  list: [],
};

const NotificationStateContext = createContext(initialState);
const NotificationDispatchContext = createContext<TDispatch>(() => ({}));

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case ACTIONS.add: {
      return {
        ...state,
      };
    }
    case ACTIONS.remove: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

const NotificationProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotificationDispatchContext.Provider value={dispatch}>
      <NotificationStateContext.Provider value={state}>{children}</NotificationStateContext.Provider>
    </NotificationDispatchContext.Provider>
  );
};

const useNotificationState = (): IState => {
  const context = useContext(NotificationStateContext);
  if (typeof context === 'undefined') {
    throw new Error('useNotificationState must be used within a NotificationProvider');
  }
  return context;
};

const useNotificationDispatch = (): TDispatch => {
  const context = useContext(NotificationDispatchContext);
  if (typeof context === 'undefined') {
    throw new Error('useNotificationDispatch must be used within a NotificationProvider');
  }
  return context;
};

const useNotificationContext = (): [IState, TDispatch] => [useNotificationState(), useNotificationDispatch()];

export { NotificationProvider, useNotificationContext };
