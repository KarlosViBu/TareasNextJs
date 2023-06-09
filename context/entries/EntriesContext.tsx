import { Entry } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
    entries: Entry[];
    // Methods
    addNewEntry: (description: string) => void;
    movedEntry: (entry: Entry, showSnackbar?: boolean) => void;
}

export const EntriesContext = createContext({} as ContextProps );