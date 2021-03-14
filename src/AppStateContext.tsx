import React, { createContext, useContext } from "react";

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

interface Task {
  id: string;
  text: string;
}

interface AppStateContextProps {
  state: AppState;
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Clean the yard." }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Sorting out things in the garage." }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Clear the store room." }],
    },
  ],
};

export interface AppState {
  lists: List[];
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
