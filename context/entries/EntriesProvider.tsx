import { FC, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';
// import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';
import { entriesApi } from '@/apis';

export interface EntriesState {
    entries: Entry[],
}

/*
const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Commodo veniam aliqua tempor officia officia non laborum.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ],
}
*/

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );
    const { enqueueSnackbar } = useSnackbar ();

    const addNewEntry = async( description: string ) => {

        const { data } = await entriesApi.post<Entry>('/entries', { description });
        dispatch({ type: '[Entry] - Add-Entry', payload: data });

    }

    // recibe la entrada completa y cambia el estado segun el movimiento (arrastrar/soltar)
    const movedEntry = async( { _id, description, status }: Entry, showSnackbar = false ) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status });
            dispatch({ type: '[Entry] - Moved-Entry', payload: data });

            if ( showSnackbar )
                enqueueSnackbar('Entrada actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
            })

        } catch (error) {
            console.log({ error });
        }
    }

    const refreshEntries = async() => {
        // Hace peticion de todas las entradas
        const { data } = await entriesApi.get<Entry[]>('/entries');
        // envias las entradas devueltas por la api
        dispatch({ type: '[Entry] - Refresh-Data', payload: data });

        // const resp = await entriesApi.get('/entries');
        // console.log(resp);
    }

    useEffect(() => {
      refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider value={{
           ...state,

           // Methods
           addNewEntry,
           movedEntry,
        }}>
           { children }
        </EntriesContext.Provider>
    )
};
