import { FC, useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material';
import { EntriesContext } from '@/context/entries';
import { UiContext } from '@/context/ui';

import { EntryStatus } from '@/interfaces';
import styles from './EntryList.module.css';
import { EntryCard } from './EntryCard';

interface Props {
    status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {
// export const EntryList = () => {
    
    const { entries, movedEntry } = useContext( EntriesContext );
    // const entriesByStatus = entries.filter( entry => entry.status === status );

    // UseMemo memoriza el valor de las entradas cada vez que ellas cambian (ultimo parameto)
    const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ]);
    
    const { isDragging, endDragging } = useContext( UiContext );


    const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }

    const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
        const id = event.dataTransfer.getData('text');
        
        // Buscamos una entrada que coisida con el id de la entrada movida
        // simbolo admiracion indica que siempre va ha ser encontrada, es poco probable que no exista
        const entry = entries.find( e => e._id === id )!;
        // el nuevo estado de la entrada es el que se recibe en las <props> como argumento
        entry.status = status;
        movedEntry( entry );
            // para cambiar nuevamente es estilo css de las entradas, ok drag and drop
        endDragging();
    }

      
    return (
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper sx={{ height: '100vh', overflow: 'scroll', backgroundColor: 'transparent', padding: '2px 1rem'  }}>
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}> 
                {/* <List sx={{ opacity: 1 }}>  */}
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }
                </List>

            </Paper>
        </div>
    )
};
