import { FuncionesSeguridad } from 'man-lab-nest';
import { FIND_ALL_POLITICAS } from './find-all.<%= nombrePoliticaMinuscula %>.politicas';
import { FIND_ONE_POLITICAS } from './find-one.<%= nombrePoliticaMinuscula %>.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.<%= nombrePoliticaMinuscula %>.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.<%= nombrePoliticaMinuscula %>.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.<%= nombrePoliticaMinuscula %>.politicas';

export const politicas<%= nombrePolitica %>: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS
}