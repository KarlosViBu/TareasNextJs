import { isValidObjectId } from 'mongoose';
import { Entry, IEntry } from '@/models';
import { db } from './';


// retorna una promesa o null
export const getEntryById = async( id: string ): Promise<IEntry | null> => {

    // validaciones
    if ( !isValidObjectId(id) ) return null;
    
    // id es valido
    // lean menos volumen de datos
    await db.connect();
    const entry = await Entry.findById(id).lean();
    await db.disconnect();
    
    // retorna la entrada
    return JSON.parse( JSON.stringify(entry) );

}

