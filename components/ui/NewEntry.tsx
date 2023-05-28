import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { EntriesContext } from '@/context/entries';
import { UiContext } from '@/context/ui';

export const NewEntry = () => {
    
    // valor de la caja de texto 
    const [inputValue, setInputValue] = useState('');
    
    // se se ha tocado el campo, para ejecutar la validacion, lo toco o nolotoco
    // tambien para mostrar elmensaje de error si se toco y se dejo en blanco
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value );
    }

    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext( UiContext);

    const onSave = () => {
    
        if ( inputValue.length === 0 ) return;
    
        addNewEntry( inputValue );
        setIsAddingEntry( false );
        setTouched( false );
        setInputValue('');
    
    }

    return (
    
      <Box sx={{ marginBottom: 2, paddingX: 2 }}>

        
        {
            isAddingEntry 
            ? (
                <>
                    <TextField 
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' }
                        error={ inputValue.length <= 0 && touched }
                        value={ inputValue }
                        onChange={ onTextFieldChanged }
                        onBlur={ () => setTouched( true ) }
                    />

                    <Box display='flex' justifyContent='space-between'>

                        <Button
                            variant='text'
                            onClick={() => setIsAddingEntry( false ) }
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant='outlined'
                            color='secondary'
                            endIcon={ <SaveOutlinedIcon /> }
                            onClick={ onSave }
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            )

            : (
                <Button
                    startIcon={ <AddIcon /> }
                    fullWidth
                    variant='outlined'
                    onClick={() => setIsAddingEntry( true ) }
                >
                    Agregar Tarea
                </Button>
            )

        }
        
      
      </Box>

  )
};
