import { UiState } from './';


type UiActionType = 
    | { type: 'UI - Open Sidebar' } 
    | { type: 'UI - Close Sidebar' }
    | { type: 'UI - Set isAddingEntry', payload: boolean }
    | { type: 'UI - Start Dragging' }
    | { type: 'UI - End Dragging' }


   //  Se espera que siempre regrese un nuevo estado no una mutacion del estado
export const uiReducer = ( state: UiState, action: UiActionType ): UiState => {

   switch (action.type) {
      case 'UI - Open Sidebar':
         return {
            // cambio de estado, todas los demas atributos (props) quedan igual
            ...state,
            sidemenuOpen: true,
          }

      case 'UI - Close Sidebar':
          return {
            // cambio de estado, todas los demas atributos (props) quedan igual
            ...state,
            sidemenuOpen: false,
           }
           case 'UI - Set isAddingEntry': 
           return {
              ...state,
              isAddingEntry: action.payload
           }

      case 'UI - Start Dragging':
         return {
            ...state,
            isDragging: true
         }
         
      case 'UI - End Dragging':
         return {
            ...state,
            isDragging: false
         }      

       default:
            // sin cambio de estado
          return state;
   }

}