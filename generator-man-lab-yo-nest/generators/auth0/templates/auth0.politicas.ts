import {FuncionesSeguridadAuth0} from '@manticore-labs/nest';
import {CREATE_POLITICAS} from './create.politicas';
import {FIND_ALL_POLITICAS} from './find-all.politicas';
import {FIND_ONE_POLITICAS} from './find-one.politicas';
import {UPDATE_ACCOUNT_POLITICAS} from './update-account.politicas';
import {UPDATE_ACCOUNT_FIRST_TIME_POLITICAS} from './update-first-time.auth0.politicas';

export const politicasAuth0: FuncionesSeguridadAuth0 = {
    updateUserForTheFirstTime: UPDATE_ACCOUNT_FIRST_TIME_POLITICAS,
    updateAccount: UPDATE_ACCOUNT_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    findMany: FIND_ALL_POLITICAS,
    create: CREATE_POLITICAS,
};
