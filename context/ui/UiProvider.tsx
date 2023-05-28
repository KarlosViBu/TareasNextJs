import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;  //arrastrando
}


const UI_INITIAL_STATE: UiState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,
}

type Props = {
    children?: React.ReactNode
  };


export const UiProvider:React.FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE );


    const openSideMenu = () =>  dispatch({ type: 'UI - Open Sidebar' });

    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

    const setIsAddingEntry = ( isAdding: boolean ) => {
        dispatch({ type:'UI - Set isAddingEntry', payload: isAdding });
    }

    const startDragging = () => {
        dispatch({ type: 'UI - Start Dragging' });
    }

    const endDragging = () => {
        dispatch({ type: 'UI - End Dragging' });
    }

    return (
        <UiContext.Provider value={{
            ...state,

            // Methods
            closeSideMenu,
            openSideMenu,
            
            setIsAddingEntry,
            
            endDragging,
            startDragging,
        }}>
            { children }
        </UiContext.Provider>
    )
};